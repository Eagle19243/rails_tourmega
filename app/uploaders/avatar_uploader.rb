# encoding: utf-8
require 'fileutils'
require 'mime/types'

class AvatarUploader < BaseUploader
  WHITE_LIST = %w(jpg jpeg gif png)

  process :crop_to_square
  process :set_content_type

  version :thumb_256 do
    process resize_to_fit: [256, 256]
  end

  version :thumb_128, from_version: :thumb_256  do
    process resize_to_fit: [128, 128]
    process quality: 90
  end

  version :thumb_64, from_version: :thumb_128 do
    process resize_to_fit: [64, 64]
    process quality: 90
  end

  def extension_white_list
    WHITE_LIST
  end

  def crop_to_square(*_args)
    manipulate! do |image|
      if image[:width] < image[:height]
        remove = ((image[:height] - image[:width]) / 2).round
        image.shave("0x#{remove}")
      elsif image[:width] > image[:height]
        remove = ((image[:width] - image[:height]) / 2).round
        image.shave("#{remove}x0")
      end
      image
    end
  end

  def set_content_type(*_args)
    content_type = file.content_type == 'application/octet-stream' || file.content_type.blank? ? MIME::Types.type_for(original_filename).first : file.content_type
    file.instance_variable_set(:@content_type, content_type)
  end

  def fog_public
    true
  end

  def filename
    "#{secure_token}_#{super}" if original_filename.present?
  end

  protected

  def secure_token
    var = :"@#{mounted_as}_secure_token"
    model.instance_variable_get(var) || model.instance_variable_set(var, SecureRandom.uuid)
  end
end
