class ContactMailer < ApplicationMailer
  default from: CEO_EMAIL

  def notify_contact_to_support(contact_id)
    @contact = Contact.find_by(id: contact_id)

    mail(to: SUPPORT_EMAIL, subject: "New contact issue to our Tourmega: #{@contact.subject}", date: Time.now )
  end

  def notify_waiting_to_sender(contact_id)
    @contact = Contact.find_by(id: contact_id)

    mail(to: @contact.email, subject: "We have already got your issue ", date: Time.now)
  end
end
