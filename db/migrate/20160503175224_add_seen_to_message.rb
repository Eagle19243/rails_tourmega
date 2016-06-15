class AddSeenToMessage < ActiveRecord::Migration
  def up
    add_column :messages, :seen, :boolean, default: false
  end

  def down
    remove_column :messages, :seen
  end
end
