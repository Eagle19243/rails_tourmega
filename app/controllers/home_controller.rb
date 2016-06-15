class HomeController < ApplicationController
  LIMIT_SLIDE_NUMBER = 5

  before_action :prepare_data, only: [:index]
  before_action :set_column_navigation, only: [:about, :founders, :how_it_works, :safety, :careers]

  def example
    redirect_to root_path unless params[:example]
  end

  def index; end
  def become_guide; end



  def founders
  end

  def about

  end

  def how_it_works
  end

  def safety

  end

  def careers

  end

  def help
  end


  def term_of_services; end

  def contact_us
    @contact = Contact.new
  end

  def privacy_policy; end
  def blog; end

  def send_contact
    @contact = Contact.new(contact_params)
    if @contact.save
      redirect_to root_path, notice: "Your issue is on the right way"
    else
      redirect_to home_contact_us_path, alert: "There are missing things in your issue"
    end
  end

  protected

  def set_column_navigation
    @column = action_name
    respond_to do |format|
      format.html { render 'about.html' }
      format.js { render 'about.js' }
    end
  end

  def prepare_data
    @countries = Country.active_for_search
    @location = Location.new
    @slides = Slide.limit(LIMIT_SLIDE_NUMBER)
    @random_tour = Tour.featured.random
  end

  def contact_params
    params.require(:contact).permit(:name, :email, :subject, :content)
  end
end
