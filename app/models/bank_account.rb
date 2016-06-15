class BankAccount < ActiveRecord::Base
  AVAILABLE_COUNTRIES = ['United state of America', 'Vietnam', 'Paypal', 'Others']
  TYPES = ['Checking', 'Saving']

  belongs_to :user

  validates :country, :name, :bank_type, :account_number, presence: true
  delegate :first_name, :last_name, to: :user, prefix: true, allow_nil: false
end
