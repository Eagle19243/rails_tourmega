class Category < ActiveRecord::Base
  mount_uploader :icon, IconUploader

  has_many :categories_tours
  has_many :tours, through: :categories_tours

  validates :name, presence: true

  MAPPING_TOURNATIVE = {
    'Art & Theaters' => 'art',
    'Culture' => 'art',
    'Outdoors' => 'sightseeing',
    'Food' => 'food',
    'Night life' => 'night_life',
    'Tech & Specialty' => 'tech',
    'Shopping' => 'shopping'
  }

  def self.mapping_from_tournative(tournative_category_name)
    self.find_by(symbol: MAPPING_TOURNATIVE[tournative_category_name])
  end

  class << self
    def collection
      pluck(:name, :symbol)
    end
  end
end
