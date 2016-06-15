module ToursHelper
  OVERVIEW_PAGES = %w(countries cities)

  def html_display_average_rating(tour)
    content_tag :div, class: "star-rating" do
      rating = tour.average_rating
      if rating.zero?
        (1..5).each { concat(content_tag(:i, "", class: 'fa fa-star-o')) }
      else
        (1..(rating.floor)).each { concat(content_tag(:i, "", class: 'fa fa-star')) }
        unless (rating - rating.floor).zero?
          concat(content_tag(:i, "", class: 'fa fa-star-half-full'))
          ((rating.ceil + 1)..5).each { concat(content_tag(:i, "", class: 'fa fa-star-o')) }
        else
          ((rating.ceil)..5).each { concat(content_tag(:i, "", class: 'fa fa-star-o')) }
        end
      end
    end
  end

  def display_reviews_count(tour)
    number = tour.reviews.count
    if number.zero?
      "0 Reviews"
    else
      number == 1 ? "1 Review" : "#{number} Reviews"
    end
  end

  def displayed_location_address(tour)
    OVERVIEW_PAGES.include?(controller_name) ? tour.location_full_address : tour.location_short_address
  end

  def display_price_type(price_type)
    case price_type.to_s
    when 'price_per_person'
      "per person"
    when 'fixed_price'
      "in total"
    end
  end

  def formatted_price(price, price_type)
    "<span class='label label-success'> #{price_type.titleize}</span>  #{price} $".html_safe
  end

  def display_chosen_categories(tour)
    if tour.persisted?
      tour.categories.pluck(:name).join(', ').titleize
    else
      ""
    end
  end

  def display_quantity_box(field)
    case field.to_s
    when "min_quantity"
      "From"
    when "max_quantity"
      "No more than"
    end
  end
end
