source 'https://rubygems.org'

ruby '2.2.3'

gem 'rails', '4.2.3'
gem 'pg'
gem 'sass-rails', '~> 5.0.4'
gem 'compass-rails'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.1.0'
gem 'jquery-rails'
gem 'jquery-ui-rails'
gem 'psych' # for not getting conflicts with other ruby version's psych
gem 'jbuilder', '~> 2.0' # Build JSON APIs with ease.
gem 'sdoc', '~> 0.4.0', group: :doc # bundle exec rake doc:rails generates the API under doc/api.
gem 'haml-rails', '~> 0.9'
gem 'gon', '~> 5.2.3'
gem 'geokit-rails'

gem 'wicked'
gem 'devise', '~> 3.4.1'
gem 'devise-async'
gem 'omniauth-facebook'
gem 'omniauth-twitter'
gem 'kaminari'
gem 'kaminari-bootstrap', '~> 3.0.1'
gem 'fog', require: 'fog/aws'
gem 'carrierwave', github: 'carrierwaveuploader/carrierwave'
gem 'carrierwave_direct'
gem 'mini_magick'
gem 'redactor-rails'
gem 'remotipart', '~> 1.2'

gem 'sidekiq', '3.5.3'
gem 'sinatra', require: nil
gem 'multi_json', '1.10.1'
gem 'elasticsearch-rails', '~> 0.1.6'
gem 'elasticsearch-model', '~> 0.1.6'
gem 'friendly_id', '~> 5.1.0'
gem 'simple_form', '~> 3.1.0'
gem 'bootstrap-datepicker-rails'
gem 'active_model_serializers', git: 'https://github.com/rails-api/active_model_serializers.git', branch: 'master'
gem 'draper', require: false
gem 'rails-observers'
gem 'protected_attributes'
gem 'aasm'
gem 'attr_encryptor'
gem 'figaro'
gem 'truncate_html'
gem 'lazyload-rails'

gem 'quiet_assets'
gem 'database_cleaner'

gem 'activeadmin', github: 'gregbell/active_admin' # for Admin
gem 'active_skin'
gem 'active_admin_datetimepicker', github: 'activeadmin-plugins/active_admin_datetimepicker'
gem 'ckeditor', github: 'galetahub/ckeditor'
gem 'chosen-rails', git: 'git://github.com/qpowell/chosen-rails.git'
gem 'sitemap_generator'
gem 'money-rails'
gem "rack-reverse-proxy", require: "rack/reverse_proxy"

group :development, :test do
  gem 'byebug'
  gem 'lograge'
  gem 'spring'
  gem 'factory_girl', require: false
  gem 'factory_girl_rails', require: false
  gem 'ffaker'
  gem 'puma'
end

group :development do
  gem 'derailed', require: false
  gem 'better_errors'
  gem "binding_of_caller"
  gem 'annotate', '~> 2.6.6'
  gem 'capistrano-rails'
  gem 'bullet'
  gem 'spring-commands-rspec'
  # Profiling tools
  gem 'rack-mini-profiler', require: false
  gem 'flamegraph', require: false
  gem 'stackprof', require: false
  gem 'rbtrace', require: false
  gem 'memory_profiler', require: false
end

group :test do
  gem 'capybara'
  gem 'poltergeist'
  gem 'rspec-rails', '~> 3.0.0'
  gem 'rspec-mocks', '~> 3.0.0'
  gem 'shoulda-matchers'
  gem 'selenium-webdriver'
  gem 'vcr'
  gem 'webmock'
  gem 'timecop'
  gem 'twilio-test-toolkit', '~> 3.4.0'
  gem 'parallel_tests'
  gem 'test_after_commit'
  gem 'cucumber'
  gem 'cucumber-rails', require: false
  gem 'capybara-screenshot'
end

group :production do
  #gem 'rails_12factor'
  gem 'dalli'
  gem 'memcachier'
  gem 'unicorn'
  gem 'unicorn-worker-killer'
end
gem 'rack-cache'
