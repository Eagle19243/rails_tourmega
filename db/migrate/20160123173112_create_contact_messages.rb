class CreateContactMessages < ActiveRecord::Migration
  def change
    create_table :contact_messages do |t|
      t.string :email
      t.text :message
      t.integer :reservation_id

      t.timestamps null: false
    end
  end
end
