class AddExternalGuestsOnReservation < ActiveRecord::Migration
  def up
    add_column :reservations, :external_guests, :text, array: true, default: []
  end

  def down
    remove_column :reservations, :external_guests
  end
end
