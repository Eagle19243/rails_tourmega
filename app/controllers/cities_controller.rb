class CitiesController < ApplicationController
  before_action :set_city, only: [:show]
  before_action :fetch_tours_and_cuisines, only: [:show]
  before_action :get_active_countries

  def show
  end

  private

  def set_city
    @city = City.friendly.find(params[:id])
  end

  def fetch_tours_and_cuisines
    @tours = @city.tours.featured.includes(:location).page(params[:page])
  end

  def get_active_countries
    @countries = Country.active_for_search.includes(:cities)
  end

end
