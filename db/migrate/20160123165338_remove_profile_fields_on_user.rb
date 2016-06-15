class RemoveProfileFieldsOnUser < ActiveRecord::Migration
  def up
    remove_column :users, :first_name
    remove_column :users, :last_name
    remove_column :users, :gender
    remove_column :users, :language
    remove_column :users, :avatar
    remove_column :users, :location_id
  end

  def down
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :gender, :string
    add_column :users, :language, :string
    add_column :users, :avatar, :string
    add_column :users, :location_id, :integer
  end
end
