class CreateTours < ActiveRecord::Migration
  def change
    create_table :tours do |t|
      t.string :name
      t.text :description
      t.text :overview
      t.decimal :price
      t.integer :user_id
      t.integer :location_id
      t.integer :duration_in_minutes
      t.integer :meeting_point_id
      t.integer :min_quantity
      t.integer :max_quantity
      t.boolean :visible
      t.string :status
      t.string :slug
      t.boolean :instant_booking
      t.string :price_type

      t.timestamps null: false
    end
    add_index :tours, :slug, unique: true
    add_index :tours, :location_id
    add_index :tours, :user_id
    add_index :tours, :status
  end
end
