class UpdateAttributeOnTourReview < ActiveRecord::Migration
  def change
    rename_column :tour_reviews, :review, :comment
  end
end
