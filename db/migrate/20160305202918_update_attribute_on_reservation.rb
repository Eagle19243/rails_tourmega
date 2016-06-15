class UpdateAttributeOnReservation < ActiveRecord::Migration
  def up
    remove_column :reservations, :tourist_id
    remove_column :reservations, :tourist_gender
    change_column :reservations, :state, :string
    rename_column :reservations, :state, :status
    rename_column :reservations, :starts_at, :start_at
    add_column :reservations, :completed_at, :datetime
  end

  def down
    rename_column :reservations, :status, :state
    rename_column :reservations, :start_at, :starts_at
    remove_column :reservations, :completed_at
  end
end
