class AddSearchActiveToCity < ActiveRecord::Migration
  def up
    add_column :cities, :is_searching_active, :boolean, default: false
  end

  def down
    remove_column :cities, :is_searching_active
  end
end
