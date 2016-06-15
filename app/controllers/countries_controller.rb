class CountriesController < ApplicationController
  before_action :set_country, only: [:show]
  before_action :fetch_tours_and_cuisines, only: [:show]
  before_action :get_active_countries

  DEFAULT_TOURS_PER_PAGE = 6

  def index
  end

  def show
  end

  private

  def set_country
    @country = Country.friendly.find(params[:id])
  end

  def fetch_tours_and_cuisines
    @tours = @country.tours.featured.includes(:location, :creator).page(params[:page]).per(DEFAULT_TOURS_PER_PAGE)
    @cuisines = @country.cuisines
  end

  def get_active_countries
    @countries = Country.active_for_search.includes(:cities)
  end

  def country_params
    params.require(:country).permit(:code, :name, :slug)
  end
end
