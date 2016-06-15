class CreateTourReviews < ActiveRecord::Migration
  def change
    create_table :tour_reviews do |t|
      t.integer :tour_id
      t.integer :profile_id
      t.string :review
      t.decimal :rating

      t.timestamps null: false
    end
  end
end
