class UpdateAttributeOnTour < ActiveRecord::Migration
  def up
    change_column :tours, :offerings, :text, default: ""
  end

  def down
    change_column :tours, :offerings, :text, array: true, default: []
  end
end
