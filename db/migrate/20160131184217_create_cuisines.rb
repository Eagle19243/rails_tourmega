class CreateCuisines < ActiveRecord::Migration
  def change
    create_table :cuisines do |t|
      t.integer :country_id
      t.string :name
      t.string :image
      t.string :introduction

      t.timestamps null: false
    end
  end
end
