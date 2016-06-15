class Contact < ActiveRecord::Base
  include Contacts::Private

  validates :email, :subject, :content, presence: true
  validates_format_of :email, with: Devise.email_regexp

  SUBJECT = [
    'Customer service',
    'Technical support',
    'Report scam or illegal',
    'Suggestions or concerns',
    'Career opportunities',
    'Investor relation',
    'Press and media',
    'Partnership'
  ]

  enum subject: SUBJECT
end
