class AddActiveToSubscriber < ActiveRecord::Migration
  def up
    add_column :subscribers, :active, :boolean, default: true
  end

  def down
    remove_column :subscribers, :active
  end
end
