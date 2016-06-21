class SearchController < ApplicationController
  before_action :prepare_location, only: [:index], unless: :js_request?
  before_action :store_start_date_session, only: [:index], unless: :js_request?
  def index
    @tours = Tour.where(id: Rails.cache.fetch('response_tours')).page(params[:page]) if Rails.cache.exist?('response_tours')
    respond_to do |format|
      format.html
      format.js
    end
  end

  def create
    elastic_response = TourSearchService.new(params).search
    @data = elastic_response.as_json.map{ |result| result['_source'] }
    @response_tours = elastic_response.records.order(:price)
    Rails.cache.write 'response_tours', @response_tours.pluck(:id)
    @tours = @response_tours.page(params[:page])

    respond_to do |format|
      format.js
    end
  end

  private
  def js_request?
    request.format.js?
  end

  def prepare_location
    if params[:location]
      country = Country.find_by(slug: params[:location][:country].try(:downcase))
      city = City.find_by(slug: params[:location][:administrative_area_level_1].try(:downcase))

      @location = Location.new(JSON.parse(location_params))
      @location.assign_attributes(persisted_country: country, persisted_city: city)
      @address = params[:address]
      @full_address = params[:location][:full_address]
    else
      redirect_to root_path
    end
  end

  def location_params
    params.require(:location).require(:full_address)
  end

  def store_start_date_session
    if params[:location]
      session[:tours_start_date] = params[:location][:start_date]
    end
  end

end
