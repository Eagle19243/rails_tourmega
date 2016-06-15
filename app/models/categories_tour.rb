class CategoriesTour < ActiveRecord::Base
  belongs_to :category
  belongs_to :tour

  validates :tour_id, :category_id, presence: true, on: :update

  class << self
    def tour_ids_with_categories(categories)
      where(category: categories).pluck(:tour_id)
    end
  end
end
