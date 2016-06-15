class Tour < ActiveRecord::Base
  LANGUAGES = ["English", "Vietnamese", "French", "Janpanese", "Chinese"]

  attr_accessor :tag_list

  include TourSearchConcern
  include Reviewable
  include Private
  extend FriendlyId
  friendly_id :name, :use => [:slugged, :finders]

  mount_uploader :thumbnail_image, ImageUploader
  mount_uploaders :images, ImageUploader

  belongs_to :location
  belongs_to :pickup_address, class_name: 'Location', foreign_key: :pickup_address_id
  belongs_to :creator, class_name: 'User', foreign_key: :user_id
  has_one :tour_import, dependent: :destroy
  has_many :reservations, :dependent => :destroy
  has_many :categories_tours
  has_many :categories, through: :categories_tours
  has_many :reviews, class_name: 'TourReview'

  scope :featured, -> { where(featured: true, visible: true) }
  scope :active, -> { where(visible: true) }

  accepts_nested_attributes_for :tour_import

  # validates :description, :duration_in_minutes, :location, :max_quantity, :min_quantity, :name, :creator, :price, :price_type, :user_id, :location_id, :pickup_address_id, presence: true
  validates :name, :creator, :location_id, :pickup_address_id, presence: true
  validate :check_min_and_max_quantity
  validates :name, length: { minimum: 20 }, allow_blank: true
  validates :description, length: { minimum: 150 }, allow_blank: true
  validates :overview, length: { minimum: 150 }, allow_blank: true

  # validate :check_dimensions

  PRICE_TYPE = [ :fixed_price, :price_per_person ]
  enum price_type: PRICE_TYPE

  CANCELLATION_RULE = [
    'Cancel up to 24h before, incurring a processing fee of 10%',
    'Cancel up to 48h before, incurring a processing fee of 10%',
    'Not allow to cancel'
  ]
  enum cancellation: CANCELLATION_RULE

  delegate :lat_lng, to: :location
  delegate :latitude, to: :location, :allow_nil => true
  delegate :longitude, to: :location, :allow_nil => true
  delegate :city_id, :country_id, to: :location, allow_nil: true
  delegate :service_tour_id, :url, to: :tour_import, prefix: false, allow_nil: true

  paginates_per 4

  class << self
    def import_from_external(service_tour_id, tour_json, to_user, in_location = nil)
      tour = to_user.tours.create!(
        {
          name: tour_json['name'],
          visible: true,
          price: tour_json['price'].to_f,
          category_ids: tour_json['categories'].map{|cat| Category.mapping_from_tournative(cat['name'])}.compact.map(&:id).uniq,
          languages: tour_json['languages'].map{|lang| lang['name']},
          description: tour_json['description'],
          min_quantity: tour_json['min_quantity'].to_i,
          max_quantity: tour_json['max_quantity'].to_i,
          duration_in_minutes: tour_json['duration'].present? ? (tour_json['duration'].to_i) : 0,
          cancellation: 0,
          price_type: tour_json['fixed_price'] ? 0 : 1,
          location: in_location,
          pickup_address: in_location,
          remote_images_urls: tour_json['images'].map{ |image| image['image_large'] }.compact,
          tour_import_attributes: {
            service_id: TourImport::TOUR_NATIVE,
            service_tour_id: service_tour_id,
            url: URI("https://www.tournative.com/api/v2/experiences/#{service_tour_id}")
          }
        }
      )
      CSV.open('db/tours.csv', 'a+') do |csv|
        row = [ tour.service_tour_id, tour.url, to_user.id,
                tour.name, tour.visible, tour.price, tour.price_type,
                tour.category_ids, tour.languages, tour.description, tour.min_quantity, tour.max_quantity,
                tour.duration_in_minutes, tour.cancellation, tour.location_id, tour.pickup_address_id,
                tour_json['images'].map{ |image| image['image_large'] } ]
        csv << row
      end
    end

    def random
      Tour.featured.order("RANDOM()").first
    end
  end

  def active?
    self.visible?
  end

  def categories_names
    self.categories.pluck(:name).join(', ')
  end

  def location_full_address
    location.full_address || location.short_address
  end

  def location_short_address
    location.short_address
  end

  def index_changed?
    true
  end

  def creator_name
    creator.name || User::DEFAULT_NAME
  end

  def creator_avatar_url
    creator.avatar_url || User::DEFAULT_AVATAR_URL
  end

  def belongs_to?(user)
    user_id == user.id
  end

  def average_rating
    reviews.average(:rating).to_f.round 1
  end

  def no_of_reviews
    reviews.size
  end

  def top_similar_tours(limit)
    similar_tours = (creator.tours.size >= limit) ? creator.tours : Tour.where(id: creator.tour_ids + CategoriesTour.tour_ids_with_categories(categories)).limit(limit)
    similar_tours.includes(:creator)
  end

  def same_category_tours
    self.class.where(id: CategoriesTour.tour_ids_with_categories(categories))
  end

  private

  def check_min_and_max_quantity
    if min_quantity && max_quantity && min_quantity > max_quantity
      errors.add :base, "The min quantity of people in tour has to be less than the max quantity"
    end
  end

  def check_dimensions
    if !thumbnail_image_cache.nil? && (thumbnail_image.width < 600 || thumbnail_image.height < 400)
      errors.add :image, "Images are too small. Need to be at least 600x400."
    end
  end
end
