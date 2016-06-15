class ChangeDefaultStatusReservation < ActiveRecord::Migration
  def change
    remove_column :reservations, :status
    add_column :reservations, :status, :string
  end
end
