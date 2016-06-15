class VerificationsController < ApplicationController
  before_action :authenticate_user!

  def email
  end

  def facebook
  end

  def twitter
  end

  def linkedin
  end

  def phone
  end

  def offline_id
  end

  private

  def verification_params
    params.require(:verification).permit(:source, :account, :verified, :message, :user_id)
  end
end
