class RemoveAttrFromProfile < ActiveRecord::Migration
  def up
    remove_column :profiles, :first_name
    remove_column :profiles, :last_name
    remove_column :profiles, :avatar
  end

  def down
    add_column :profiles, :first_name, :string
    add_column :profiles, :last_name, :string
    add_column :profiles, :avatar, :string
  end
end
