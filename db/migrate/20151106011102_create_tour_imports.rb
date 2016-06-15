class CreateTourImports < ActiveRecord::Migration
  def change
    create_table :tour_imports do |t|
      t.references :tour, index: true
      t.integer :service_id
      t.integer :service_tour_id
      t.string :url

      t.timestamps null: false
    end

    add_foreign_key :tour_imports, :tours
    add_index :tour_imports, [:service_id, :service_tour_id], unique: true
  end
end
