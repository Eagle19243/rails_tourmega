module PlacesHelper
  def in_country_of_city(place)
    if place.class.name == "City"
      "in <a href='#{country_path(place.country)}'>#{place.country.name}</a>"
    else
      ""
    end
  end

  def is_country?(place)
    place.class.name == "Country"
  end
end