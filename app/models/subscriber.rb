class Subscriber < ActiveRecord::Base
  include Subscribers::Private

  validates :email, presence: true, uniqueness: true
  validates_format_of :email, with: Devise.email_regexp

  def not_exists?
    Subscriber.find_by(email: email) ? false : true
  end
end
