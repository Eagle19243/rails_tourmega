class AddLocationImage < ActiveRecord::Migration
  def up
    add_column :locations, :scene_images, :json
  end

  def down
    remove_column :locations, :scene_images
  end
end
