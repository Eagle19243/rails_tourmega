class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :name
      t.string :short_name
      t.decimal :latitude
      t.decimal :longitude
      t.string :location_type
      t.string :google_place_id
      t.string :slug

      t.timestamps null: false
    end
    add_index :locations, :slug, unique: true
  end
end
