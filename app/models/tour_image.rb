class TourImage < ActiveRecord::Base
  mount_uploader :file, ImageUploader

  belongs_to :tour

  validates :name, presence: true
end
