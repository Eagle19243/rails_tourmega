class AddDetailsInformationOnReservation < ActiveRecord::Migration
  def up
    add_column :reservations, :guest_information, :text
    add_column :reservations, :guest_travel_background, :text
    remove_column :reservations, :note
  end

  def down
    remove_column :reservations, :guest_information
    remove_column :reservations, :guest_traveller_background
    add_column :reservations, :note, :string
  end
end
