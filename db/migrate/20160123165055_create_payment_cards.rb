class CreatePaymentCards < ActiveRecord::Migration
  def change
    create_table :payment_cards do |t|
      t.string :name_on_card
      t.string :number
      t.string :month
      t.string :year
      t.string :billing_address
      t.string :city
      t.string :post_code
      t.string :state

      t.timestamps null: false
    end
  end
end
