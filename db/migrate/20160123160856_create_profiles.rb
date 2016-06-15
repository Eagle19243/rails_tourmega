class CreateProfiles < ActiveRecord::Migration
  def change
    create_table :profiles do |t|
      t.integer :user_id
      t.string :first_name
      t.string :last_name
      t.string :gender
      t.string :avatar
      t.string :phone
      t.integer :primary_address_id
      t.integer :nationality_id
      t.string :job_title
      t.string :biography
      t.date :date_of_birth
      t.string :hobbies
      t.integer :guide_type
      t.json :social_pages
      t.string :invite_code

      t.timestamps null: false
    end
  end
end
