# encoding: utf-8

class ImageUploader < BaseUploader

  # Include RMagick or MiniMagick support:
  # include CarrierWave::RMagick
  include CarrierWave::MiniMagick

  # Choose what kind of storage to use for this uploader:
  # storage :file

  # Override the directory where uploaded files will be stored.
  # This is a sensible default for uploaders that are meant to be mounted:
  # Process files as they are uploaded:
  # process :scale => [200, 300]
  #
  # def scale(width, height)
  #   # do something
  #   # process :convert => 'png'
  # end

  process :optimize
  # process :store_dimensions
  process :convert => 'jpg'

  # Create different versions of your uploaded files:
  version :thumb do
    process resize_to_fill: [355, 235]
  end

  version :view do
    process resize_to_fill: [600, 400]
  end

  version :large do
    process resize_to_fill: [800, 600]
    process :optimize
  end
  # version :medium, :from_version => :large do
  #   process resize_to_fill: [299, 176]
  # end

  # version :medium_home, :from_version => :large do
  #   process resize_to_fill: [370, 218]
  # end

  # version :large, :from_version => :xlarge do
  #   process resize_to_fill: [460, 292]
  # end

  # version :xlarge do
  #   process resize_to_fill: [620, 364]
  # end

  # version :view do
  #   process resize_to_fill_if_larger: [645, 318]
  # end

  # version :view_larger do
  #   process resize_to_fill_if_larger: [645, 430]
  # end
  def image
    @image ||= MiniMagick::Image.open( model.send(mounted_as).path )
  end

  def image_width
     image[:width]
  end

  def image_height
    image[:height]
  end

  def resize_to_fill_if_larger(width, height, gravity='center')
    width = self.image_width if self.image_width < width
    height = self.image_height if self.image_height < height
    resize_to_fill(width, height, gravity)
  end

  def optimize
    manipulate! do |img|
      return img unless img.mime_type.match /image\/jpeg/
      img.strip
      img.combine_options do |c|
        c.quality "80"
        c.depth "8"
        c.interlace "plane"
      end
      img
    end
  end

  # for image size validation
  # fetching dimensions in uploader, validating it in model
  attr_accessor :width, :height
  before :cache, :capture_size
  def capture_size(file)
    if version_name.blank? # Only do this once, to the original version
      if file.path.nil? # file sometimes is in memory
        img = ::MiniMagick::Image::read(file.file)
        @width = img[:width]
        @height = img[:height]
      else
        @width, @height = `identify -format "%wx %h" #{file.path}`.split(/x/).map{|dim| dim.to_i }
      end
    end
  end

  # Add a white list of extensions which are allowed to be uploaded.
  # For images you might use something like this:
  def extension_white_list
    %w(jpg jpeg gif png)
  end

  def filename
    if original_filename.present?
      @updated_name ||= "#{SecureRandom.uuid}.jpg"
    end
  end

  def store_dimensions
    if file && model
      model.width, model.height = ::MiniMagick::Image.open(file.file)[:dimensions]
    end
  end

  def fog_public
    true
  end

  def asset_host
    ENV['CDN_ASSET_HOST']
  end
end
