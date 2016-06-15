class Cuisine < ActiveRecord::Base
  belongs_to :country
  mount_uploader :image, ImageUploader

  validates :name, :image, :introduction, presence: true
end
