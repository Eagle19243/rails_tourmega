class ApplicationMailer < ActionMailer::Base
  CEO_EMAIL = "quinnie@tourmega.com"
  JIN_EMAIL = "jin@tourmega.com"
  SUPPORT_EMAIL = "support@tourmega.com"

  default from: CEO_EMAIL
  layout 'mailer'
end
