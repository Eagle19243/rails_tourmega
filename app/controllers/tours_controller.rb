class ToursController < ApplicationController
  before_action :authenticate_host!, only: [:new, :edit, :create, :update, :destroy]
  before_action :set_tour, only: [:show, :edit, :update, :destroy, :profile, :tour_itinerary, :additional_info, :preview, :update_profile, :update_tour_itinerary, :update_additional_info, :update_preview]
  before_action :check_active_tour!, only: [:show]
  before_action :authenticate_creator!, only: [:edit, :update, :destroy, :preview]
  before_action :new_tour, only: [:new]
  before_action :set_location_and_pickup_address, only: [:create, :update, :update_profile, :update_tour_itinerary, :update_additional_info]

  STEPS = [
    PROFILE_STEP = "profile",
    ITINERARY_STEP = "tour_itinerary",
    INFO_STEP = "additional_info",
    PREVIEW_STEP = "preview"
  ]

  def index
    @tours = current_user.tours.includes(:creator).order(created_at: :desc).page(params[:page]).per(6)

    respond_to do |format|
      format.html
      format.js
    end
  end

  def show
    @reservation = @tour.reservations.new
  end

  def new
    @active_tab = params[:tab] || PROFILE_STEP
  end

  def edit
    @active_tab = params[:tab] || PROFILE_STEP
  end

  def update
    respond_to do |format|
      if @tour.update(@tour_attributes)
        format.html { redirect_to users_path, notice: I18n.t('megatours.update_successfully') }
        format.js
      else
        format.html { redirect_to users_path, alert: I18n.t('megatours.update_failed') }
        format.js
      end
    end
  end

  def create
    @tour = current_user.tours.new(@tour_attributes)

    respond_to do |format|
      if @tour.save
        format.html { redirect_to tour_itinerary_tour_path(@tour) }
        format.js { render 'edit.js', next_tab: ITINERARY_STEP }
      else
        format.html { redirect_to tours_path, alert: I18n.t('megatours.create_failed') }
        format.js
      end
    end
  end

  def destroy
    respond_to do |format|
      if @tour.belongs_to?(current_user) && @tour.destroy
        format.html { redirect_to users_path, notice: 'Tour was successfully taken down for now' }
        format.js
      end
    end
  end

  #steps
  def profile
    redirect_to edit_tour_path(@tour, tab: PROFILE_STEP)
  end

  def update_profile
    if @tour.update(@tour_attributes)
      @tour.go_to_itinerary! if @tour.may_go_to_itinerary?
      redirect_to tour_itinerary_tour_path(@tour)
    else
      redirect_to tours_path, alert: I18n.t('megatours.update_failed')
    end
  end

  def tour_itinerary
    redirect_to edit_tour_path(@tour, tab: ITINERARY_STEP)
  end

  def update_tour_itinerary
    if @tour.update(@tour_attributes)
      @tour.go_to_additional_info! if @tour.may_go_to_additional_info?
      redirect_to additional_info_tour_path(@tour)
    else
      redirect_to tour_itinerary_tour_path(@tour), alert: I18n.t('megatours.update_failed')
    end
  end

  def additional_info
    redirect_to edit_tour_path(@tour, tab: INFO_STEP)
  end

  def update_additional_info
    if @tour.update(@tour_attributes)
      @tour.go_to_preview! if @tour.may_go_to_preview?
      redirect_to preview_tour_path(@tour)
    else
      redirect_to additional_info_tour_path(@tour), alert: I18n.t('megatours.update_failed')
    end
  end

  def preview
    redirect_to edit_tour_path(@tour, tab: PREVIEW_STEP)
  end

  def update_preview
    @tour.wait_for_approved! if @tour.may_wait_for_approved?
    redirect_to tours_path, notice: I18n.t('megatours.waiting_for_approved')
  end

  private

  def tour_params
    params.require(:tour).permit(:city_id, :name, :overview, :description,
                                 :min_quantity, :max_quantity, :price, :price_type, :flexible_price,
                                 :flexible_requirement, :duration_in_minutes, :thumbnail_image,
                                 :pickup_address_id, :location_id, :location, :pickup_address_id,
                                 :pickup_address, :start_time, :offerings, languages: [], images: [],
                                  category_ids: [])
  end

  def location_params
    tour_params[:location] ? eval(tour_params.require(:location)) : nil
  end

  def pickup_address_params
    tour_params[:pickup_address] ? eval(tour_params.require(:pickup_address)) : nil
  end

  def new_tour
    @tour = current_user.tours.new
  end

  def set_tour
    @tour = Tour.find(params[:id])
  end

  def check_active_tour!
    raise ActiveRecord::RecordNotFound unless @tour.active?
  end

  def set_location_and_pickup_address
    @location = Location.first_or_create(location_params) if location_params
    @pickup_address = Location.first_or_create(pickup_address_params) if pickup_address_params
    @tour_attributes = tour_params
    @tour_attributes = tour_params.except(:location, :pickup_address).merge(location: @location, pickup_address: @pickup_address) if (location_params && pickup_address_params)
  end

  def authenticate_creator!
    raise Exceptions::TourNonAuthorizedError unless current_user == @tour.creator
  end
end
