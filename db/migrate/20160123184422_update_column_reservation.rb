class UpdateColumnReservation < ActiveRecord::Migration
  def up
    rename_column :reservations, :user_id, :profile_id
    rename_column :reservations, :guests, :number_of_passengers
    rename_column :reservations, :credit_card, :payment_card_id
    remove_column :reservations, :tourist_email
    remove_column :reservations, :tourist_phone
    remove_column :reservations, :tourist_name
    remove_column :reservations, :tourist_birthday
    add_column :reservations, :tourist_id, :integer
    add_column :reservations, :coupon_id, :integer
    add_column :reservations, :booking_reference_id, :integer
    add_column :reservations, :additional_request, :text
  end

  def down
    rename_column :reservations, :profile_id, :user_id
    rename_column :reservations, :number_of_passengers, :guests
    rename_column :reservations, :payment_card_id, :credit_card
    add_column :reservations, :tourist_email, :string
    add_column :reservations, :tourist_phone, :string
    add_column :reservations, :tourist_name, :string
    add_column :reservations, :tourist_birthday, :date
    remove_column :reservations, :tourist_id
    remove_column :reservations, :coupon_id
    remove_column :reservations, :booking_reference_id
    remove_column :reservations, :additional_request
  end
end
