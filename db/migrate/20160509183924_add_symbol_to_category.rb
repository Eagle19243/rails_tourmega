class AddSymbolToCategory < ActiveRecord::Migration
  def up
    add_column :categories, :symbol, :string
  end

  def down
    remove_column :categories, :symbol
  end
end
