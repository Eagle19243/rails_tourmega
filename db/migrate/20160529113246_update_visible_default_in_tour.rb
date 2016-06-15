class UpdateVisibleDefaultInTour < ActiveRecord::Migration
  def change
    change_column :tours, :visible, :boolean, default: false
  end
end
