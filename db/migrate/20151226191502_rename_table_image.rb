class RenameTableImage < ActiveRecord::Migration
  def up
    rename_table :images, :tour_images
  end

  def down
    rename_table :tour_images, :images
  end
end
