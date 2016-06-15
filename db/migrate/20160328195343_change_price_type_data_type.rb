class ChangePriceTypeDataType < ActiveRecord::Migration
  def up
    change_column :tours, :price_type, 'integer USING CAST(price_type AS integer)', default: 0, null: false
  end
end
