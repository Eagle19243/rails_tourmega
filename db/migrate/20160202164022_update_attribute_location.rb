class UpdateAttributeLocation < ActiveRecord::Migration
  def up
    remove_column :locations, :scene_images
    rename_column :locations, :short_name, :address
  end

  def down
    add_column :locations, :scene_images, :json
    rename_column :locations, :address, :short_name
  end
end
