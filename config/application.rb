require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Encal
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.2
    config.web_console.development_only = false
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.

    config.encoding = "utf-8"

    config.time_zone = 'Brasilia'
    config.active_record.default_timezone = :local

    # Configure sensitive parameters which will be filtered from the log file.
    config.filter_parameters += [:password, :senha, :chave_acesso]
    
    config.i18n.default_locale = "pt-BR"
    I18n.config.enforce_available_locales = true

    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins '*'
        resource '*', headers: :any, methods: [:get, :post, :options]
      end
    end
    
  end
end
