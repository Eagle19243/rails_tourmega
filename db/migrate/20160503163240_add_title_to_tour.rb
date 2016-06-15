class AddTitleToTour < ActiveRecord::Migration
  def up
    add_column :tours, :title, :string
    add_column :tours, :transportations, :text, array: true, default: []
    add_column :tours, :cancellation, :integer, default: 0, null: false
    add_column :tours, :emotions, :text, array: true, default: []
  end

  def down
    remove_column :tours, :title
    remove_column :tours, :transportations
    remove_column :tours, :cancellation
    remove_column :tours, :emotions
  end
end
