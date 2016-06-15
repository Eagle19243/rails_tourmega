module Tour::Private
  extend ActiveSupport::Concern

  included do
    after_destroy :delete_empty_upload_dirs
  end

  private

  def delete_empty_upload_dirs
    [:images, :thumbnail_image].each do |mounted_attr|
      FileUtils.rm_rf(Rails.root.join("#{Rails.root}/public/uploads/#{self.class.to_s.underscore}/#{mounted_attr}/", self.id.to_s)) if self.send("#{mounted_attr}")
    end
  end
end
