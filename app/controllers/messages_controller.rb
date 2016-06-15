class MessagesController < ApplicationController
  before_action :authenticate_user!
  before_action :get_message, only: [:show, :edit, :update, :destroy]
  before_action :new_message, only: [:new]
  before_action :fetch_messages, only: [:index]

  def index
  end

  def show
  end

  def new
  end

  def edit
  end

  def update
  end

  def create
  end

  def destroy
  end

  private

  def message_params
    params.require(:message).permit(:sender_id, :receiver_id, :title, :content, :skip_email)
  end

  def fetch_messages
    @messages = current_user.messages
  end

  def get_message
    @message = current_user.messages.find_by(params[:id])
  end

  def new_reservation
    @message = current_user.messages.build
  end

end

