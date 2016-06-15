class Country < ActiveRecord::Base
  extend FriendlyId
  friendly_id :name, use: [:slugged, :finders]

  mount_uploaders :scene_images, ImageUploader
  has_many :cities
  has_many :cuisines
  has_many :locations
  has_many :tours, through: :locations
  has_many :citizens, class_name: 'User'
  scope :active_for_search, -> { where(is_searching_active: true) }

  validates :code, presence: true, uniqueness: true
  validates :slug, presence: true, uniqueness: true

  class << self
    def collection
      pluck(:name, :id)
    end
  end

  def default_scene_image
    scene_images.first
  end

  def default_scene_image_url
    scene_images.first.try(:url)
  end

  def default_city
    cities.popular.last
  end

  def active_cities
    cities.active_for_search
  end
end
