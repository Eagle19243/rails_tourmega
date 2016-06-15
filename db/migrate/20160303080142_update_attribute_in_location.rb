class UpdateAttributeInLocation < ActiveRecord::Migration
  def up
    remove_column :locations, :address
    add_column :locations, :street_number, :string
    add_column :locations, :route, :string
    add_column :locations, :locality, :string
    add_column :locations, :administrative_area_level_1, :string
    add_column :locations, :country, :string
    add_column :locations, :postal_code, :string
  end

  def down
    add_column :locations, :address, :string
    remove_column :locations, :street_number
    remove_column :locations, :route
    remove_column :locations, :locality
    remove_column :locations, :administrative_area_level_1
    remove_column :locations, :country
    remove_column :locations, :postal_code
  end
end
