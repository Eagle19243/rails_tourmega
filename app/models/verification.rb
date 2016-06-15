class Verification < ActiveRecord::Base
  SOURCES = [
    :email,
    :phone_number,
    :facebook,
    :linkedin,
    :twitter
  ]

  belongs_to :user
  validates :source, :account, presence: true

  def formated_string
    status = verified ? "Yes" : "No"
    "#{source}: #{account} - #{status}"
  end
end
