class Users::RegistrationsController < Devise::RegistrationsController
  def update
    if current_user.update_attributes(password: user_params[:password], password_confirmation: user_params[:password_confirmation])
      sign_in(current_user, bypass: true)
      redirect_to users_path
      flash[:notice] = "Update password successfully"
    else
      redirect_to users_path
      flash[:error] = "New password is not acceptable"
    end
  end

  def user_params
    params.require(:user).permit(:password, :password_confirmation)
  end
end