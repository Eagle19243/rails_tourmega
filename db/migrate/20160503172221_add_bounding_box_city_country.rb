class AddBoundingBoxCityCountry < ActiveRecord::Migration
  def up
    add_column :countries, :ne_lat, :decimal, {:precision => 10, :scale => 6}
    add_column :countries, :ne_lng, :decimal, {:precision => 10, :scale => 6}
    add_column :countries, :sw_lat, :decimal, {:precision => 10, :scale => 6}
    add_column :countries, :sw_lng, :decimal, {:precision => 10, :scale => 6}
    add_column :cities, :ne_lat, :decimal, {:precision => 10, :scale => 6}
    add_column :cities, :ne_lng, :decimal, {:precision => 10, :scale => 6}
    add_column :cities, :sw_lat, :decimal, {:precision => 10, :scale => 6}
    add_column :cities, :sw_lng, :decimal, {:precision => 10, :scale => 6}
  end

  def down
    remove_column :countries, :ne_lat
    remove_column :countries, :ne_lng
    remove_column :countries, :sw_lat
    remove_column :countries, :sw_lng
    remove_column :cities, :ne_lat
    remove_column :cities, :ne_lng
    remove_column :cities, :sw_lat
    remove_column :cities, :sw_lng
  end
end
