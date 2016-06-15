class AddSearchActiveToCountry < ActiveRecord::Migration
  def up
    add_column :countries, :is_searching_active, :boolean, default: false
  end

  def down
    remove_column :countries, :is_searching_active
  end
end
