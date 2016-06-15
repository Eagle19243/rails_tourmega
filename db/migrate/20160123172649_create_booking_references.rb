class CreateBookingReferences < ActiveRecord::Migration
  def change
    create_table :booking_references do |t|
      t.integer :tour_id
      t.integer :profile_id
      t.string :referral_code

      t.timestamps null: false
    end
  end
end
