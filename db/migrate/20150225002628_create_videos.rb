class CreateVideos < ActiveRecord::Migration
  def change
    create_table :videos do |t|
      t.string :youtube_code
      t.integer :duration
      t.integer :tour_id

      t.timestamps null: false
    end
    add_index :videos, :tour_id
  end
end
