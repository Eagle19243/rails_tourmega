class CreateBankAccounts < ActiveRecord::Migration
  def change
    create_table :bank_accounts do |t|
      t.string :country
      t.string :name
      t.string :address
      t.string :bank_type
      t.string :routing_number
      t.string :account_number
      t.string :swift_code
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
