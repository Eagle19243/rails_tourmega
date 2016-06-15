class SubscriberMailer < ApplicationMailer
  default from: CEO_EMAIL

  def notify_subscriber_email_to_support(subscriber_id)
    @subscriber = Subscriber.find_by(id: subscriber_id)

    mail(to: SUPPORT_EMAIL, subject: "New subscriber to our Tourmega: #{contact.subject}", date: Time.now )
  end

  def welcome_email_to_subscriber(subscriber_id)
    @subscriber = Subscriber.find_by(id: subscriber_id)

    mail(to: @subscriber.email, subject: "Welcome to Tourmega", date: Time.now)
  end
end
