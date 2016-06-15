class AddLgnLatToCountry < ActiveRecord::Migration
  def up
    add_column :countries, :lng, :decimal, precision: 10, scale: 6
    add_column :countries, :lat, :decimal, precision: 10, scale: 6
  end

  def down
    remove_column :countries, :lng
    remove_column :countries, :lat
  end
end
