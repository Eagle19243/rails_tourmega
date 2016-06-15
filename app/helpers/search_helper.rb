module SearchHelper
  def search_place
    if params[:city]
      "Results for #{params[:city]}, #{params[:country]}".titlecase
    elsif params[:country]
      city = Country.friendly.find(params[:country]).default_city
      "Results for #{city}, #{params[:country]}".titlecase
    else
      "Choose Your Destinations"
    end
  end
end
