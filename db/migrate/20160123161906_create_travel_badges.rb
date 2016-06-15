class CreateTravelBadges < ActiveRecord::Migration
  def change
    create_table :travel_badges do |t|
      t.string :title
      t.string :image
      t.text :description
      t.text :requirements

      t.timestamps null: false
    end
  end
end
