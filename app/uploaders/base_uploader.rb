# encoding: utf-8

class BaseUploader < CarrierWave::Uploader::Base
  include CarrierWave::MiniMagick

  # Choose what kind of storage to use for this uploader:
  if Rails.env.test? || Rails.env.development?
    storage :file
  else
    storage :fog
  end
  # Override the directory where uploaded files will be stored.
  # This is a sensible default for uploaders that are meant to be mounted:
  def store_dir
    "#{Rails.root}/public/uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  # def cache_dir
  #   "#{Rails.root}/tmp/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  # end
end
