class UpdateColumnsOnTour < ActiveRecord::Migration
  def up
    rename_column :tours, :meeting_point_id, :pickup_address_id
    rename_column :tours, :user_id, :profile_id
    add_column :tours, :images, :json
    add_column :tours, :offerings, :text, array: true, default: []
    add_column :tours, :languages, :text, array: true, default: []
    add_column :tours, :flexible_price, :string
    add_column :tours, :flexible_requirement, :text
    add_column :tours, :thumbnail_image, :string
  end

  def down
    rename_column :tours, :pickup_address_id_id, :meeting_point_id_id
    rename_column :tours, :profile_id, :user_id
    remove_column :tours, :images
    remove_column :tours, :offerings
    remove_column :tours, :flexible_price
    remove_column :tours, :flexible_requirement
    remove_column :tours, :languages
    remove_column :tours, :thumbnail_image
  end
end
