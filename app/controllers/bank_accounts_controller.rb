class BankAccountsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_current_bank_account, only: [:update]

  def show
  end

  def create
    @bank_account = current_user.bank_accounts.new(bank_account_params)
    respond_to do |format|
      if @bank_account.save
        flash.now[:notice] = "Update bank account successfully."
      else
        flash.now[:alert] = "Cannot update bank account."
      end
      format.js
    end
  end

  def update
    respond_to do |format|
      if @bank_account.update(bank_account_params)
        flash.now[:notice] = "Update bank account successfully."
      else
        flash.now[:alert] = "Cannot update bank account."
      end
      format.js
    end
  end

  private

  def set_current_bank_account
    @bank_account = current_user.current_bank_account
  end

  def bank_account_params
    params.require(:bank_account).permit(:country, :name, :address, :bank_type, :routing_number, :account_number, :swift_code, :user_id)
  end
end
