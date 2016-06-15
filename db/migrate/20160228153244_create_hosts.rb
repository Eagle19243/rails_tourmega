class CreateHosts < ActiveRecord::Migration
  def change
    create_table :hosts do |t|
      t.integer :profile_id
      t.string :skype_id
      t.text :traveller_background
      t.text :experience_background
      t.text :reason
      t.string :certificates

      t.timestamps null: false
    end
  end
end
