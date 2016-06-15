class Location < ActiveRecord::Base
  include Elasticsearch::Model

  extend FriendlyId
  friendly_id :address, use: [:slugged, :finders]
  #no longer used attributes: name, type, google_place_id
  belongs_to :persisted_city, class_name: 'City', foreign_key: :city_id
  belongs_to :persisted_country, class_name: 'Country', foreign_key: :country_id
  has_many :tours, class_name: 'Tour'
  has_many :pick_address_tours, class_name: 'Tour', foreign_key: :pickup_address_id
  has_one :user, inverse_of: :location

  scope :within_city, ->(city) { where(persisted_city: city) }

  acts_as_mappable :default_units => :miles,
                   :default_formula => :sphere,
                   :distance_field_name => :distance,
                   :lat_column_name => :latitude,
                   :lng_column_name => :longitude

  class << self
    def import_from_external(location_json)
      where(address: location_json['name']).first_or_create do |location|
        location.name = location_json['name']
        location.address = location_json['name']
        location.latitude = location_json['lat']
        location.longitude = location_json['lng']
      end
      location = Location.find_by(name: location_json['name'])

      filepath = "db/csv/#{Date.today.to_formatted_s(:number)}_locations.csv"
      CSV.open(filepath, 'a+') do |csv|
        row = [ location.address, location.latitude, location.longitude ]
        csv << row
      end
      location
    end

    def first_or_create(params)
      begin
        where(slug: params[:address].parameterize).first_or_create(params)
      rescue
        raise Exceptions::TourNotAvailableToCreate
      end
    end
  end


  def lat_lng
    {lat: latitude.to_f, lon: longitude.to_f}
  end

  #street_number, routes, locality, administrative_area_level_1, country, postal_code
  def full_address
    address.presence || [street_number, routes, locality, administrative_area_level_1, country].compact.reject(&:blank?).join(', ')
  end
  alias_method :to_s, :full_address

  def short_address
    [locality, administrative_area_level_1, country].compact.reject(&:blank?).join(', ').presence || persisted_city.geometry_name.presence || address
  end

  def hash_attributes
    {
      address: address,
      locality: locality,
      administrative_area_level_1: administrative_area_level_1,
      country: country,
      postal_code: postal_code,
      latitude: latitude.to_f,
      longitude: longitude.to_f
    }
  end
end
