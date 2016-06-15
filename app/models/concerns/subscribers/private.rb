module Subscribers::Private
  extend ActiveSupport::Concern

  included do
    after_commit :send_notification_email, on: :create
  end

  private

  def send_notification_email
    SubscriberMailer.notify_subscriber_email_to_support(self.id).deliver_later!(wait: 10.seconds)
    SubscriberMailer.welcome_email_to_subscriber(self.id).deliver_later!(wait: 10.seconds)
  end
end