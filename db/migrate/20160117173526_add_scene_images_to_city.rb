class AddSceneImagesToCity < ActiveRecord::Migration
  def up
    add_column :cities, :scene_images, :json
  end

  def down
    remove_column :cities, :scene_images
  end
end
