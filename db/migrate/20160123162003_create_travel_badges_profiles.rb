class CreateTravelBadgesProfiles < ActiveRecord::Migration
  def change
    create_table :travel_badges_profiles do |t|
      t.integer :travel_badge_id
      t.string :profile_id
      t.string :integer

      t.timestamps null: false
    end
  end
end
