class CreateCategoriesTours < ActiveRecord::Migration
  def change
    create_table :categories_tours do |t|
      t.integer :category_id
      t.integer :tour_id

      t.timestamps null: false
    end
    add_index :categories_tours, :category_id
    add_index :categories_tours, :tour_id
  end
end
