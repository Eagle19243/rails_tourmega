class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  # force_ssl if: :ssl_configured?
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActiveRecord::RecordNotUnique, with: :record_not_unique
  rescue_from Exceptions::TourNonAuthorizedError, with: :not_authorized
  unless Rails.env.development?
    rescue_from ActionView::MissingTemplate, with: :redirect_to_last_url
  end
  before_action :configure_permitted_parameters, if: :devise_controller?
  # around_action :set_time_zone

  def current_tour
    authenticate_host!
    current_user.tours.find(params[:id])
  end

  def current_reservation
    authenticate_user!
    current_user.reservations.find(params[:id])
  end

  private

  def ssl_configured?
    Rails.env.production? || Rails.env.staging?
  end

  def not_authorized
    respond_to do |format|
      format.js do
        flash.now[:error] = t('unauthorized')
        render 'shared/flash_messages', type: 'error'
      end
      format.html do
        flash[:error] = t('unauthorized')
        user_signed_in? ? redirect_to(users_path) : redirect_to(user_session_path)
      end
    end
  end

  def record_not_found
    flash[:error] = case $!.message
                    when /Tour/ then t('tour.not_found')
                    when /User/ then t('user.not_found')
                    else t('record_not_found')
                    end

    respond_to do |format|
      format.js { render 'shared/flash_messages', type: 'error' }
      format.html { user_signed_in? ? redirect_to(root_path) : redirect_to(user_session_path) }
    end
  end

  def record_not_unique
    flash[:error] = t('record_not_unique')

    respond_to do |format|
      format.js { render 'shared/flash_messages', type: 'error' }
      format.html { user_signed_in? ? redirect_to(root_path) : redirect_to(user_session_path) }
    end
  end

  def redirect_to_last_url
    if request.env['HTTP_REFERER']
      redirect_to request.env['HTTP_REFERER']
    else
      redirect_to root_path
    end
  end

  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_up) do |u|
      u.permit(:email, :password, :first_name, :last_name, :avatar)
    end
    devise_parameter_sanitizer.for(:account_update) do |u|
      u.permit(:email, :password, :password_confirmation, :first_name, :last_name, :avatar)
    end
  end

  def set_time_zone(&block)
    time_zone = Time.find_zone(cookies[:time_zone]) || Rails.application.config.time_zone
    Time.use_zone(time_zone, &block)
  end

  def authenticate_host!
    authenticate_user!
    #raise Exceptions::TourNonAuthorizedError unless current_user.is_a_host?
  end
end
