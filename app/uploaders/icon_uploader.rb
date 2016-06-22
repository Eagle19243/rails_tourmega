# encoding: utf-8

class IconUploader < BaseUploader
  def fog_public
    true
  end

  def asset_host
    ENV['CDN_ASSET_HOST']
  end
end
