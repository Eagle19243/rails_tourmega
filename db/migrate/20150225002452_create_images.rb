class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :name
      t.integer :tour_id
      t.boolean :main
      t.string :path

      t.timestamps null: false
    end

    add_index :images, :tour_id
  end
end
