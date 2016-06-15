require "development_mail_interceptor"

Rails.application.configure do
  config.mailer_sender = 'jinuosvn@gmail'

  config.action_mailer.delivery_method = :smtp
  config.action_mailer.perform_deliveries = true

  ActionMailer::Base.smtp_settings = {
    :address              => "smtp.gmail.com",
    :port                 => 587,
    :domain               => "gmail.com",
    :user_name            => "jinuosvn@gmail.com",
    :password             => "weroarwithfour",
    :authentication       => "plain",
    :enable_starttls_auto => true
  }

  ActionMailer::Base.perform_deliveries = true
  ActionMailer::Base.raise_delivery_errors = Rails.env.production? ? false : true
  if Rails.env.development? || Figaro.env.setup_mode
    ActionMailer::Base.register_interceptor(DevelopmentMailInterceptor)
  end
end
