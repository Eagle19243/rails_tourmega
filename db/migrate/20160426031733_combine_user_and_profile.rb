class CombineUserAndProfile < ActiveRecord::Migration
  def change
    add_column :users, :gender, :string
    add_column :users, :phone, :string
    add_column :users, :primary_address_id, :integer
    add_column :users, :nationality_id, :integer
    add_column :users, :job_title, :string
    add_column :users, :biography, :text
    add_column :users, :date_of_birth, :date
    add_column :users, :hobbies, :string
    add_column :users, :guide_type, :integer
    add_column :users, :invite_code, :string
    add_column :users, :credits, :decimal, precision: 10, scale: 2
    rename_column :reservations, :profile_id, :user_id
    rename_column :tour_reviews, :profile_id, :user_id
    rename_column :tours, :profile_id, :user_id
    rename_column :uploads, :profile_id, :user_id
    rename_column :travel_badges_profiles, :profile_id, :user_id
    rename_table :travel_badges_profiles, :travel_badges_users
    rename_column :booking_references, :profile_id, :user_id
    rename_column :hosts, :profile_id, :user_id
    rename_column :location_reviews, :profile_id, :user_id
    drop_table :profiles
  end
end
