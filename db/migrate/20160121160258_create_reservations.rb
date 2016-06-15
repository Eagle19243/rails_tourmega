class CreateReservations < ActiveRecord::Migration
  def change
    create_table :reservations do |t|
      t.timestamps null: false

      t.datetime :starts_at
      t.integer :user_id, index: true
      t.integer :guests, default: 1
      t.integer :tour_id, index: true
      t.string :note
      t.string :code
      t.string :state, default: 'booking'
      t.string :tourist_email
      t.string :tourist_phone
      t.string :tourist_name
      t.string :tourist_birthday
      t.boolean :tourist_gender
      t.integer :credit_card
    end
  end
end
