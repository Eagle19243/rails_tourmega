class AddPopularToCity < ActiveRecord::Migration
  def up
    add_column :cities, :popular, :boolean, default: false
  end

  def down
    remove_column :cities, :popular
  end
end
