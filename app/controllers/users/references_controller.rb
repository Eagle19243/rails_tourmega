class Users::ReferencesController < Devise::RegistrationsController
  before_action :authenticate_user!
  before_action :set_navigation

  def facebook
  end

  def twitter
  end

  def google_plus
  end

  def email
  end

  private

  def reference_params
    params.permit(:reference_email)
  end

  def set_navigation
    flash.now[:notice] = t('references.successfully')
    render 'referral.js'
  end
end
