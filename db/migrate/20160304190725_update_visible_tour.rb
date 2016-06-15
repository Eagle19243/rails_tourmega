class UpdateVisibleTour < ActiveRecord::Migration
  def change
    change_column :tours, :visible, :boolean, visible: false
  end
end
