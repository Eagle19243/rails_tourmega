Tourmega::Application.configure do
  config.lograge.enabled = true if Rails.env.development?
end
