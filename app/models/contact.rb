class Contact < ActiveRecord::Base
  include Contacts::Private

  validates :email, :subject, :content, presence: true
  validates_format_of :email, with: Devise.email_regexp

  SUBJECT = [
    'Customer service',
    'Technical support',
    'Suggestions or concerns',
    'Report tours or guides',
    'Press and Media',
    'Career opportunities',
    'Partnership',
    'Investor relations',
    'Other'
  ]

  enum subject: SUBJECT
end
