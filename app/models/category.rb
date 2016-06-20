class Category < ActiveRecord::Base
  mount_uploader :icon, IconUploader

  has_many :categories_tours
  has_many :tours, through: :categories_tours

  validates :name, presence: true

  MAPPING_TOURNATIVE = {
    'Art & Theaters' => 'artsy',
    'Culture' => 'landmarks',
    'Outdoors' => 'outdoor_and_nature',
    'Food' => 'food_and_drink',
    'Night life' => 'night_activities',
    'Tech & Specialty' => 'unusual',
    'Shopping' => 'artsy',
    'Photography' => 'outdoor_and_nature'
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
