require File.expand_path('../boot', __FILE__)

require 'rails/all'
require 'draper'
Draper::Railtie.initializers.delete_if {|initializer| initializer.name == 'draper.setup_active_model_serializers' }

#To display information about the search request (duration, search definition) during development
require 'elasticsearch/rails/instrumentation'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Tourmega
  class Application < Rails::Application
    config.time_zone = 'Central Time (US & Canada)'

    config.active_record.raise_in_transactional_callbacks = true

    config.assets.paths << Rails.root.join('vendor', 'assets', 'components')
    config.assets.paths << Rails.root.join('vendor', 'assets', 'javascripts')
    config.assets.paths << Rails.root.join('vendor', 'assets', 'stylesheets')
    config.assets.paths << Rails.root.join('node_modules')

    config.autoload_paths += [
      "#{config.root}/app/observers",
      "#{config.root}/app/validators",
      "#{config.root}/app/workers",
      "#{config.root}/lib",
      "#{config.root}/app/api"
    ]

    if Rails.env.production?
      config.cache_store = :dalli_store
    end
    config.active_job.queue_adapter = :sidekiq

    config.generators do |g|
      g.template_engine :haml
      g.test_framework :rspec, :fixture => false, :views => false
      g.fixture_replacement :factory_girl
      g.javascript_engine = :js
      g.javascripts false
      g.stylesheets false
    end
    config.quiet_assets = true

    config.middleware.insert_before(Rack::Runtime, Rack::ReverseProxy) do
      reverse_proxy_options preserve_host: true
      reverse_proxy '/blog', 'http://tourmega.localhost' if Rails.env.development?
      reverse_proxy '/blog', 'http://blog.tourmega.com' if Rails.env.production?
    end
  end
end
