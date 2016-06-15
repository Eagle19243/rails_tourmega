class AddFeaturedToTour < ActiveRecord::Migration
  def up
    add_column :tours, :featured, :boolean, default: false
  end

  def down
    remove_column :tours, :featured
  end
end
