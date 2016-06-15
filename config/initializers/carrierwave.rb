CarrierWave.configure do |config|
  if Rails.env.test?
    config.storage = :file
    config.enable_processing = false
  elsif Rails.env.development?
    config.storage = :file
  else
    config.storage = 'fog/aws'
    config.fog_credentials = {
      provider: 'AWS',
      aws_access_key_id: Figaro.env.AWS_ACCESS_KEY_ID,
      aws_secret_access_key: Figaro.env.AWS_SECRET_ACCESS_KEY,
      region: Figaro.env.AWS_REGION
    }

    config.asset_host = Figaro.env.CDN_ASSET_HOST
    config.fog_directory = Figaro.env.S3_BUCKET
    config.fog_public = false
    config.fog_authenticated_url_expiration = 900
    config.fog_attributes = { 'Cache-Control' => 'max-age=315576000' }
    config.max_file_size = 50.megabytes
  end
end

module CarrierWave
  module MiniMagick
    def quality(percentage)
      manipulate! do |img|
        img.write(current_path){ self.quality(percentage) }
        img = yield(img) if block_given?
        img
      end
    end
  end
end
