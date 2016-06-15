class DevelopmentMailInterceptor
  def self.delivering_email(message)
    message.subject = "[#{Rails.env}: #{message.arguments[:to]}] #{message.arguments[:subject]}"
    message.to = ENV['RECIPIENT_INTERCEPTOR'].split(',')
  end
end
