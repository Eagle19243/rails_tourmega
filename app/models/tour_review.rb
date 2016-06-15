class TourReview < ActiveRecord::Base
  belongs_to :tour
  belongs_to :reviewer, class_name: 'User', foreign_key: :user_id

  delegate :name, :avatar_url, to: :reviewer, prefix: true, allow_nil: true

  scope :for_user, ->(user_id) { joins('INNER JOIN tours ON tours.id = tour_reviews.tour_id').where('tours.user_id = :user_id', user_id: user_id) }
end
