class SubscribersController < ApplicationController
  def create
    @subscriber = Subscriber.where(email: subscriber_params[:email]).first_or_initialize
    if @subscriber.save
      flash.now[:notice] = 'You are successfully subscribed Tourmega.'
    end
  end

  private

  def subscriber_params
    params.require(:subscriber).permit(:email)
  end
end
