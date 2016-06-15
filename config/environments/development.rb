Rails.application.configure do
  # OpenSSL::SSL::VERIFY_PEER = OpenSSL::SSL::VERIFY_NONE
  config.cache_classes = false

  # Do not eager load code on boot.
  config.eager_load = false

  # Show full error reports and disable caching.
  config.consider_all_requests_local       = true
  config.action_controller.perform_caching = false

  # config.mailer_sender = 'jinuosvn@gmail'
  config.action_mailer.default_url_options = { host: 'localhost', port: '3000' }
  # config.action_mailer.delivery_method = :smtp
  # config.action_mailer.perform_deliveries = true
  # ActionMailer::Base.smtp_settings = {
  # :address              => "smtp.gmail.com",
  # :port                 => 587,
  # :domain               => "gmail.com",
  # :user_name            => "jinuosvn@gmail.com",
  # :password             => "weroarwithfour",
  # :authentication       => "plain",
  # :enable_starttls_auto => true
  # }
  #
  # config.action_mailer.raise_delivery_errors = true

  # Print deprecation notices to the Rails logger.
  config.active_support.deprecation = :log

  # Raise an error on page load if there are pending migrations.
  config.active_record.migration_error = :page_load

  # Debug mode disables concatenation and preprocessing of assets.
  # This option may cause significant delays in view rendering with a large
  # number of complex assets.
  config.assets.debug = false

  # Asset digests allow you to set far-future HTTP expiration dates on all assets,
  # yet still be able to expire them through the digest params.
  config.assets.digest = false

  # config.assets.precompile += %w()
  config.assets.precompile << /\.(?:svg|eot|woff|ttf)$/
  # Adds additional error checking when serving assets at runtime.
  # Checks for improperly declared sprockets dependencies.
  # Raises helpful error messages.
  config.assets.raise_runtime_errors = true

  # Raises error for missing translations
  # config.action_view.raise_on_missing_translations = true

  config.after_initialize do
    Bullet.enable = true
    # Bullet.alert = true
    Bullet.bullet_logger = true
    Bullet.console = true
    Bullet.rails_logger = true
    # Bullet.airbrake = true
    # Bullet.rollbar = true
  end

  config.lograge.keep_original_rails_log = true
  config.lograge.logger = ActiveSupport::Logger.new "#{Rails.root}/log/lograge_#{Rails.env}.log"
  Sidekiq::Logging.logger.level = Logger::DEBUG
end
