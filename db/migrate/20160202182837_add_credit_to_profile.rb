class AddCreditToProfile < ActiveRecord::Migration
  def up
    add_column :profiles, :credits, :decimal, default: 0.0
  end

  def down
    remove_column :profiles, :credits
  end
end
