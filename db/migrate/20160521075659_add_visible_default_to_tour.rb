class AddVisibleDefaultToTour < ActiveRecord::Migration
  def change
    change_column :tours, :visible, :boolean, default: true
  end
end
