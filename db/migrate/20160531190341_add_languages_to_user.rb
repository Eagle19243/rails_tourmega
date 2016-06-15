class AddLanguagesToUser < ActiveRecord::Migration
  def up
    add_column :users, :languages, :text, array: true, default: []
  end

  def down
    remove_column :users, :languages
  end
end
