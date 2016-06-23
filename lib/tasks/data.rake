namespace :data do
  desc 'Update countries data, please dont change the slug'
  task :update_countries => :environment do
    countries = [
      {
        slug: 'brazil',
        scene_images: [open(File.join(Rails.root, '/app/assets/images/countries/small/small_brazil.jpg'))]
      },
      {
        slug: 'china',
        scene_images: [open(File.join(Rails.root, '/app/assets/images/countries/small/small_china.jpg'))]
      },
      {
        slug: 'costa-rica',
        scene_images: [open(File.join(Rails.root, '/app/assets/images/countries/small/small_costa_rica.jpg'))]
      },
      {
        slug: 'egypt',
        scene_images: [open(File.join(Rails.root, '/app/assets/images/countries/small/small_egypt.jpg'))]
      },
      {
        slug: 'india',
        scene_images: [open(File.join(Rails.root, '/app/assets/images/countries/small/small_india.jpg'))]
      },
      {
        slug: 'italy',
        scene_images: [open(File.join(Rails.root, '/app/assets/images/countries/small/small_italy.jpg'))]
      },
      {
        slug: 'kenya',
        scene_images: [open(File.join(Rails.root, '/app/assets/images/countries/small/small_kenya.jpg'))]
      },
      {
        slug: 'mexico',
        scene_images: [open(File.join(Rails.root, '/app/assets/images/countries/small/small_mexico.jpg'))]
      },
      {
        slug: 'peru',
        scene_images: [open(File.join(Rails.root, '/app/assets/images/countries/small/small_peru.jpg'))]
      },
      {
        slug: 'portugal',
        scene_images: [open(File.join(Rails.root, '/app/assets/images/countries/small/small_portugal.jpg'))]
      },
      {
        slug: 'united-states',
        scene_images: [open(File.join(Rails.root, '/app/assets/images/countries/small/small_usa.jpg'))]
      },
      {
        slug: 'vietnam',
        scene_images: [open(File.join(Rails.root, '/app/assets/images/countries/small/small_vietnam.jpg'))]
      }
    ]
    Country.update_all(is_searching_active: false)
    countries.each do |country_params|
      @country = Country.find_by(slug: country_params[:slug])
      @country.scene_images = country_params[:scene_images]
      @country.is_searching_active = true
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
        symbol: 'unusual',
        name: I18n.t('search.tour_types.unusual'),
        icon: open(File.join(Rails.root, '/app/assets/images/categories/unusual.png'))
      },
      {
        symbol: 'food',
        name: I18n.t('search.tour_types.food_and_drink'),
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
        name: I18n.t('search.tour_types.sports_and_adventure'),
        icon: open(File.join(Rails.root, '/app/assets/images/categories/sports.png'))
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
