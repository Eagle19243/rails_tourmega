require 'database_cleaner'
require 'open-uri'

DatabaseCleaner[:active_record].clean_with(:truncation, only: %w[countries cities slides categories])
# DatabaseCleaner[:active_record].clean_with(:truncation, only: %w[tours users locations tour_imports categories_tours])

begin
  AdminUser.create!(email: 'admin@tourmega.com', password: 'password17e3', password_confirmation: 'password17e3')
  User.create!(email: 'support@tourmega.com', password: 'password17e3')
  User.create!(email: 'bdthinh@tourmega.com', password: 'password17e3', first_name: 'Thinh', last_name: 'Bui')
rescue
  p "Admin and user are already existed"
end

puts "Creating Country Data"
Country.delete_all
code_index = 0
lng_index = 1
lat_index = 2
name_index = 3
file = open('db/countries.csv').read
CSV.parse(file, headers: true) do |row|
  begin
    Country.create(code: row[code_index], name: row[name_index], lng: row[lng_index], lat: row[lat_index])
    p "#{row[code_index]}, #{row[name_index]}, #{row[lng_index]}, #{row[lat_index]}"
  rescue
    p "Cannot create country data for #{row[name_index]}"
  end
end

countries = [
  {
    slug: 'cambodia',
    scene_images: [open(File.join(Rails.root, '/app/assets/images/countries/small/small_cambodia.jpg'))]
  },
  {
    slug: 'china',
    scene_images: [open(File.join(Rails.root, '/app/assets/images/countries/small/small_china.jpg'))]
  },
  {
    slug: 'indonesia',
    scene_images: [open(File.join(Rails.root, '/app/assets/images/countries/small/small_indonesia.jpg'))]
  },
  {
    slug: 'japan',
    scene_images: [open(File.join(Rails.root, '/app/assets/images/countries/small/small_japan.jpg'))]
  },
  {
    slug: 'malaysia',
    scene_images: [open(File.join(Rails.root, '/app/assets/images/countries/small/small_malaysia.jpg'))]
  },
  {
    slug: 'philippines',
    scene_images: [open(File.join(Rails.root, '/app/assets/images/countries/small/small_philippines.jpg'))]
  },
  {
    slug: 'bangladesh',
    scene_images: [open(File.join(Rails.root, '/app/assets/images/countries/small/small_bangladesh.jpg'))]
  },
  {
    slug: 'india',
    scene_images: [open(File.join(Rails.root, '/app/assets/images/countries/small/small_india.jpg'))]
  },
  {
    slug: 'laos',
    scene_images: [open(File.join(Rails.root, '/app/assets/images/countries/small/small_laos.jpg'))]
  },
  {
    slug: 'singapore',
    scene_images: [open(File.join(Rails.root, '/app/assets/images/countries/small/small_singapore.jpg'))]
  },
  {
    slug: 'thailand',
    scene_images: [open(File.join(Rails.root, '/app/assets/images/countries/small/small_thailand.jpg'))]
  },
  {
    slug: 'vietnam',
    scene_images: [open(File.join(Rails.root, '/app/assets/images/countries/small/small_vietnam.jpg'))]
  }
]
countries.each do |country_params|
  @country = Country.find_by(slug: country_params[:slug])
  @country.scene_images = country_params[:scene_images]
  @country.save!
end

puts "Creating City Data"
City.delete_all
File.open(File.join(Rails.root, "db/active_countries.txt"), 'r').each_line do |line|
  code, cities = line.chomp.split("|")
  @country = Country.find_by(code: code)
  @country.update_attributes(is_searching_active: true)
  cities.split(",").each do |city|
    City.create(name: city, country: @country, is_searching_active: true)
    p "#{code}: #{city}"
  end
end

puts "Creating Slide Data"
Slide.delete_all
slides = [
  {
    caption: 'Love Helping People',
    location: 'Create new income for locals while enjoying unique experiences',
    remote_image_url: 'https://s3-us-west-1.amazonaws.com/tourmega-production/background1.jpg'
  },
  {
    caption: 'Taking a trip',
    location: 'Request a tour and enjoy authentic experiences',
    remote_image_url: 'https://s3-us-west-1.amazonaws.com/tourmega-production/background2.jpg'
  },
  {
    caption: 'Feeling Adventurous',
    location: 'Get submersed in the local culture and travel safely',
    remote_image_url: 'https://s3-us-west-1.amazonaws.com/tourmega-production/background3.jpg'
  }
]

slides.each do |slide|
  @slide = Slide.create(caption: slide[:caption], location: slide[:location], remote_image_url: slide[:remote_image_url])
  p slide[:caption]
end

puts "Creating Category Data"
Category.delete_all
categories = [
  {
    symbol: 'artsy',
    name: I18n.t('search.tour_types.artsy'),
    icon: open(File.join(Rails.root, '/app/assets/images/categories/artsy.png'))
  },
  {
    symbol: 'unusual',
    name: I18n.t('search.tour_types.unusual'),
    icon: open(File.join(Rails.root, '/app/assets/images/categories/unusual.png'))
  },
  {
    symbol: 'food',
    name: I18n.t('search.tour_types.food'),
    icon: open(File.join(Rails.root, '/app/assets/images/categories/food.png'))
  },
  {
    symbol: 'night_activities',
    name: I18n.t('search.tour_types.night_activities'),
    icon: open(File.join(Rails.root, '/app/assets/images/categories/night_activities.png'))
  },
  {
    symbol: 'outdoor_and_nature',
    name: I18n.t('search.tour_types.outdoor_and_nature'),
    icon: open(File.join(Rails.root, '/app/assets/images/categories/outdoor_and_nature.png'))
  },
  {
    symbol: 'landmarks',
    name: I18n.t('search.tour_types.landmarks'),
    icon: open(File.join(Rails.root, '/app/assets/images/categories/landmarks.png'))
  },
  {
    symbol: 'music_and_dance',
    name: I18n.t('search.tour_types.music_and_dance'),
    icon: open(File.join(Rails.root, '/app/assets/images/categories/music_and_dance.png'))
  },
  {
    symbol: 'health_and_fitness',
    name: I18n.t('search.tour_types.health_and_fitness'),
    icon: open(File.join(Rails.root, '/app/assets/images/categories/health_and_fitness.png'))
  },
  {
    symbol: 'cruises',
    name: I18n.t('search.tour_types.cruises'),
    icon: open(File.join(Rails.root, '/app/assets/images/categories/cruises.png'))
  },
  {
    symbol: 'sports',
    name: I18n.t('search.tour_types.sports'),
    icon: open(File.join(Rails.root, '/app/assets/images/categories/sports.png'))
  }
]

categories.each do |category|
  @category = Category.create(category)
  p category[:name]
end
