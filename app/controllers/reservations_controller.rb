class ReservationsController < ApplicationController
  before_action :authenticate_user!
  before_action :get_tour_and_creator
  before_action :get_reservation, only: [:show, :edit, :update, :destroy]
  before_action :new_reservation, only: [:new]

  STEPS = [ :passenger, :billing_information, :review_and_submit ]

  def show
  end

  def new
  end

  def passenger
  end

  def billing_information
  end

  def review_and_submit
  end

  def edit
  end

  def update
    step = params[:step]

    respond_to do |format|
      if @reservation.update(reservation_params.merge(tour: @tour))
        format.html do
          case step
          when :passenger
            redirect_to billing_information_tour_reservation_path(@tour, @reservation)
          when :billing_information
            redirect_to review_and_submit_tour_reservation_path(@tour, @reservation)
          when :review_and_submit
            redirect_to reservations_users_path, notice: I18n.t('reservations.successfully')
          end
        end
        format.js
      end
    end
  end

  def create
    @reservation = current_user.reservations.new(reservation_params.merge(tour: @tour))

    respond_to do |format|
      if @reservation.save
        format.html do
          redirect_to billing_information_tour_reservation_path(@tour, @reservation)
        end
        format.js
      end
    end
  end

  def destroy
  end

  private

  def reservation_params
    params.require(:reservation).permit(:start_at, :number_of_passengers, :step, :guest_information,
                                        :guest_travel_background, :additional_request,
                                        external_guests: [])
  end

  def get_tour_and_creator
    @tour = Tour.find(params[:tour_id])
    @creator = @tour.creator
  end

  def new_reservation
    @reservation = current_user.reservations.build(tour: @tour)
    @reservation.update_attributes(start_at: reservation_params[:start_at], number_of_passengers: reservation_params[:number_of_passengers]) if params[:reservation]
  end

  def get_reservation
    @reservation = current_user.reservations.find(params[:id])
  end
end
