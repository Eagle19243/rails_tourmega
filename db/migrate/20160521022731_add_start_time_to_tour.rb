class AddStartTimeToTour < ActiveRecord::Migration
  def up
    add_column :tours, :start_time, :time
  end

  def down
    remove_column :tours, :start_time
  end
end
