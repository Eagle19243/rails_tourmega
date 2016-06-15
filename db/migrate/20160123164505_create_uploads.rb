class CreateUploads < ActiveRecord::Migration
  def change
    create_table :uploads do |t|
      t.string :title
      t.integer :uploadable_id
      t.string :uploadable_type
      t.string :uploaded_in
      t.integer :profile_id

      t.timestamps null: false
    end
  end
end
