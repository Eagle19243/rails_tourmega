class AddSlugToCity < ActiveRecord::Migration
  def up
    add_column :cities, :slug, :string
  end

  def down
    remove_column :cities, :slug
  end
end
