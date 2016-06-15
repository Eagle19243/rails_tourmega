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

  before :store, :remember_cache_id
  after :store, :delete_tmp_dir
   # store! nil's the cache_id after it finishes so we need to remember it for deletion
  def remember_cache_id(new_file)
    @cache_id_was = cache_id
  end

  def delete_tmp_dir(new_file)
    # make sure we don't delete other things accidentally by checking the name pattern
    if @cache_id_was.present? && @cache_id_was =~ /\A[\d]{8}\-[\d]{4}\-[\d]+\-[\d]{4}\z/
      FileUtils.rm_rf(File.join(root, cache_dir, @cache_id_was))
    end
  end
end
