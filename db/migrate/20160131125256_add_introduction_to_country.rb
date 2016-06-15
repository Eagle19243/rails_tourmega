class AddIntroductionToCountry < ActiveRecord::Migration
  def up
    add_column :countries, :introduction, :text, default: ""
  end

  def down
    remove_column :countries, :introduction
  end
end
