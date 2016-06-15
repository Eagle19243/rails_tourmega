class UsersController < ApplicationController
  before_action :authenticate_user!
  skip_before_action :authenticate_user!, only: [:public_profile]
  before_action :fetch_reservations, only: [:reservations]
  before_action :fetch_travels, only: [:travels]
  before_action :fetch_crafted_tours, only: [:crafted_tours]
  before_action :get_public_user_tours, only: [:public_profile]
  before_action :set_bank_account, only: [:bank_accounts]
  before_action :set_column_navigation, only: [:reservations, :travels, :references, :verifications, :crafted_tours, :account_settings, :profile_information, :availability, :bank_accounts]

  def public_profile
    @reviews = TourReview.for_user(@user.id)
    respond_to do |format|
      format.html
      format.js
    end
  end

  def crafted_tours; end
  def reservations; end
  def travels; end
  def verifications; end
  def account_settings; end
  def profile_information; end
  def availability; end
  def references; end
  def bank_accounts; end

  def index
    @column = 'profile'

    respond_to do |format|
      format.html
      format.js { render 'content.js' }
    end
  end

  def update
    @column = 'profile'
    flash.now[:notice] = "Update profile successfully" if current_user.update(user_params)

    respond_to do |format|
      format.html { redirect_to users_path }
      format.js { render 'content.js' }
    end
  end

  def host
    @host = current_user.host || current_user.build_host
  end

  private

  def set_column_navigation
    @column = action_name
    respond_to do |format|
      format.html { render 'index.html' }
      format.js { render 'content.js' }
    end
  end

  def user_params
    params.require(:user).permit(:gender, :phone, :job_title, :biography, :date_of_birth, :hobbies, :guide_type, :nationality_id, :primary_address_id, :email, :first_name, :last_name, :avatar)
  end

  def fetch_reservations
    if params[:status] == 'confirmed'
      @reservations = current_user.reservations.completed
    else
      @reservations = current_user.reservations.pending
    end
    @reservations.includes(:tour)
  end

  def fetch_travels
    @reservations = current_user.reservations.completed
    @travels = @reservations.for_tours
  end

  def fetch_crafted_tours
    @tours = current_user.tours.page(params[:page]).per(6)
  end

  def get_public_user_tours
    @user = User.find(params[:id])
    @tours = @user.tours
  end

  def set_bank_account
    @bank_account = current_user.current_bank_account || current_user.bank_accounts.new
  end
end
