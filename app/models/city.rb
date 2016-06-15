class City < ActiveRecord::Base
  extend FriendlyId
  friendly_id :name, use: [:slugged, :finders]

  mount_uploaders :scene_images, ImageUploader

  belongs_to :country
  has_many :locations
  has_many :tours, through: :locations

  scope :active_for_search, -> { where(is_searching_active: true) }
  scope :popular, -> { where(popular: true) }
  validates :name, presence: true
  validates :country_id, presence: true
  validates :slug, presence: true, uniqueness: true

  class << self
    def collection
      all.map{ |c| [c.geometry_name, c.id] }
    end
  end

  def default_scene_image
    scene_images.first
  end

  def default_scene_image_url
    scene_images.first.try(:url)
  end

  def geometry_name
    "#{name}, #{country.name}"
  end
end
