class CreateCoupons < ActiveRecord::Migration
  def change
    create_table :coupons do |t|
      t.string :code
      t.date :expired_date
      t.decimal :percentage
      t.decimal :value
      t.decimal :minimum_invoice
      t.boolean :applied_all
      t.json :applied_area

      t.timestamps null: false
    end
  end
end
