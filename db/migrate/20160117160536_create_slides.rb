class CreateSlides < ActiveRecord::Migration
  def change
    create_table :slides do |t|
      t.string :caption
      t.string :location
      t.string :image

      t.timestamps null: false
    end
  end
end
