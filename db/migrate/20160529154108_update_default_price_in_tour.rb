class UpdateDefaultPriceInTour < ActiveRecord::Migration
  def change
    change_column :tours, :price, :decimal, default: 0.0
  end
end
