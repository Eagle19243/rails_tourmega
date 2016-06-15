class AddAttributeToLocation < ActiveRecord::Migration
  def up
    add_column :locations, :city_id, :integer, default: nil
    add_column :locations, :country_id, :integer, default: nil
  end

  def down
    remove_column :locations, :city_id
    remove_column :locations, :country_id
  end
end
