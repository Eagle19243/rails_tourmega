namespace :data do
  desc 'Update countries data, please dont change the slug'
  task :update_countries => :environment do
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
      p "Updated #{country_params[:slug]}"
    end
  end

  desc 'Update categories data, please dont change the symbol'
  task :update_categories => :environment do
    categories = [
      {
        symbol: 'artsy',
        name: I18n.t('search.tour_types.artsy'),
        icon: open(File.join(Rails.root, '/app/assets/images/categories/artsy.png'))
      },
      {
        symbol: 'tech',
        name: I18n.t('search.tour_types.tech'),
        icon: open(File.join(Rails.root, '/app/assets/images/categories/unusual.png'))
      },
      {
        symbol: 'shopping',
        name: I18n.t('search.tour_types.shopping'),
        icon: open(File.join(Rails.root, '/app/assets/images/categories/shopping.png'))
      },
      {
        symbol: 'food',
        name: I18n.t('search.tour_types.food'),
        icon: open(File.join(Rails.root, '/app/assets/images/categories/food.png'))
      },
      {
        symbol: 'night_life',
        name: I18n.t('search.tour_types.night_life'),
        icon: open(File.join(Rails.root, '/app/assets/images/categories/night_activities.png'))
      },
      {
        symbol: 'photography',
        name: I18n.t('search.tour_types.photography'),
        icon: open(File.join(Rails.root, '/app/assets/images/categories/landmarks.png'))
      },
      {
        symbol: 'excursion',
        name: I18n.t('search.tour_types.excursion'),
        icon: open(File.join(Rails.root, '/app/assets/images/categories/outdoor_and_nature.png'))
      },
      {
        symbol: 'sightseeing',
        name: I18n.t('search.tour_types.sightseeing'),
        icon: open(File.join(Rails.root, '/app/assets/images/categories/landmarks.png'))
      },
      {
        symbol: 'cruises',
        name: I18n.t('search.tour_types.cruises'),
        icon: open(File.join(Rails.root, '/app/assets/images/categories/cruises.png'))
      },
      {
        symbol: 'sports',
        name: I18n.t('search.tour_types.sports'),
        icon: open(File.join(Rails.root, '/app/assets/images/categories/sports_and_adventure.png'))
      }
    ]

    categories.each do |category_params|
      category = Category.find_by(symbol: category_params[:symbol])
      category.update_attributes(category_params.except(:symbol))
      p "Updated #{category.symbol}"
    end
  end

  desc 'Update homepage banners'
  task :update_banners  => :environment do
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
    p 'Delete all sliding banners'
    Slide.delete_all
    slides.each do |slide|
      new_slide = Slide.create(caption: slide[:caption],
                               location: slide[:location],
                               remote_image_url: slide[:remote_image_url])
      p "Created banner #{new_slide.caption}"
    end
  end
end
