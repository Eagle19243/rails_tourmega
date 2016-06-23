class VideoUploader < BaseUploader
  def store_dir
    "public/#{model.class.name.underscore}/#{mounted_as}/#{model.id}"
  end

  def extension_whitelist
    %w(mp4 avi ogg)
  end

  def move_to_cache
    true
  end

  def move_to_store
    true
  end

  def fog_public
    true
  end

  def asset_host
    ENV['CDN_ASSET_HOST']
  end
end
