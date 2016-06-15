class AddSceneImagesToCountry < ActiveRecord::Migration
  def up
    add_column :countries, :scene_images, :json
  end

  def down
    remove_column :countries, :scene_images
  end
end
