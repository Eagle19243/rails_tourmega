class CreateLocationReviews < ActiveRecord::Migration
  def change
    create_table :location_reviews do |t|
      t.integer :location_id
      t.integer :profile_id
      t.text :review
      t.decimal :rating

      t.timestamps null: false
    end
  end
end
