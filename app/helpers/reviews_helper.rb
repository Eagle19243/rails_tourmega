module ReviewsHelper
  def details_rating(review)
    "#{review.rating} (#{formatted_date(review.created_at)})"
  end
end