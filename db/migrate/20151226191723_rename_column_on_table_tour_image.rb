class RenameColumnOnTableTourImage < ActiveRecord::Migration
  def up
    rename_column :tour_images, :main, :is_thumbnail
    rename_column :tour_images, :path, :file
  end

  def down
    rename_column :tour_images, :is_thumbnail, :main
    rename_column :tour_images, :file, :path
  end
end
