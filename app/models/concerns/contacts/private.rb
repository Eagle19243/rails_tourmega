module Contacts::Private
  extend ActiveSupport::Concern

  included do
    after_commit :send_notification_email, on: :create
  end

  private

  def send_notification_email
    ContactMailer.notify_contact_to_support(self.id).deliver_later!(wait: 10.seconds)
    ContactMailer.notify_waiting_to_sender(self.id).deliver_later!(wait: 10.seconds)
  end
end