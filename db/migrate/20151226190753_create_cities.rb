class CreateCities < ActiveRecord::Migration
  def change
    create_table :cities do |t|
      t.string :name
      t.text :description
      t.string :postcode
      t.string :code
      t.integer :country_id

      t.timestamps null: false
    end

    add_index :cities, :country_id
  end
end
