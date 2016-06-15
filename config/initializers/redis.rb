require 'sidekiq'
require 'sidekiq/web'

uri = URI.parse(ENV["REDISTOGO_URL"] || "redis://127.0.0.1:6379/")
REDIS = Redis.new(:host => uri.host, :port => uri.port, :password => uri.password)

redis_conn = proc {
  REDIS
}

Sidekiq.configure_client do |config|
  config.redis = ConnectionPool.new(size: 1, &redis_conn)
end

Sidekiq.configure_server do |config|
  config.redis = ConnectionPool.new(size: 2, &redis_conn)
end

Sidekiq::Web.use(Rack::Auth::Basic) do |user, password|
  user = "sidekiq@tourmega.com" || ENV["SIDEKIQ_USERNAME"]
  password = "password17e3" || ENV["SIDEKIQ_PASSWORD"]
  [user, password]
end
