class AddTourVideoToTours < ActiveRecord::Migration
  def change
    add_column :tours, :video_presentation, :string
  end
end
