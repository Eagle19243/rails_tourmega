class UpdateDefaultPopularCity < ActiveRecord::Migration
  def up
    change_column :cities, :popular, :boolean, default: true
  end
  def down
    change_column :cities, :popular, :boolean, default: false
  end
end
