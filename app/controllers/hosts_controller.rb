class HostsController < ApplicationController
  before_action :authenticate_user!

  def create
    unless current_user.host
      current_user.create_host(host_params)
    else
      current_user.host.update(host_params)
    end
    redirect_to root_path
  end

  def host_params
    params.require(:host).permit(:skype_id, :traveller_background, :experience_background, :reason, :certificates)
  end
end
