# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
precompile_assets = [
  "required.js",
  "gmap_autocomplete.js",
  "gmap_tour_location.js",
  "gmap_search.js",
  "tourmega_disqus.js",
  "map-icons.min.js",
  "webfont_loader.js",
  "oms.min.js",
  "history_state.js"
]

Rails.application.config.assets.precompile += precompile_assets
