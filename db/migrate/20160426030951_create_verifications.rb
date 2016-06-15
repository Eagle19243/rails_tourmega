class CreateVerifications < ActiveRecord::Migration
  def change
    create_table :verifications do |t|
      t.string :source
      t.string :message
      t.string :account
      t.boolean :verified
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
