class CreateCountries < ActiveRecord::Migration
  def change
    create_table :countries do |t|
      t.string :name
      t.string :code
      t.string :slug

      t.timestamps null: false
    end

    add_index :countries, :slug, unique: true
    add_index :countries, :code, unique: true
  end
end
