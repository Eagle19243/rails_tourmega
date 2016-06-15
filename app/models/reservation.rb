class Reservation < ActiveRecord::Base
  EXTERNAL_GUESTS = [ :spose, :children, :family, :colleague, :friend, :other ]

  STATUSES = [ PENDING  = :pending,
               PASSENGER = :passenger,
               BILLING_INFORMATION = :billing_information,
               REVIEW_AND_SUBMIT = :review_and_submit,
               COMPLETED = :completed,
               DECLINED = :declined]
  include AASM

  belongs_to :tour
  belongs_to :user
  has_one :payment_card
  has_one :coupon
  has_one :booking_reference

  validates :tour_id, :user_id, :start_at, presence: true

  delegate :creator, :categories, to: :tours, prefix: true

  aasm column: :status do
    state PENDING, initial: true
    state PASSENGER
    state BILLING_INFORMATION
    state REVIEW_AND_SUBMIT
    state COMPLETED
    state DECLINED

    event :passenger do
      transitions from: PENDING, to: PASSENGER
    end

    event :billing_information do
      transitions from: PASSENGER, to: BILLING_INFORMATION
    end

    event :review_and_submit do
      transitions from: BILLING_INFORMATION, to: REVIEW_AND_SUBMIT
    end

    event :complete do
      after { touch :completed_at }
      transitions from: REVIEW_AND_SUBMIT, to: COMPLETED
    end

    event :decline do
      transitions to: DECLINED
    end

    event :pending do
      transitions to: PENDING
    end
  end

  def complete?(step)
    case step
    when :passenger
      (self.billing_information? || self.review_and_submit? || self.completed?) ? true : false
    when :billing_information
      (self.review_and_submit? || self.completed?) ? true : false
    when :review_and_submit
      (self.completed?) ? true : false
    else
      false
    end
  end

  def self.for_tours
    (self.present? && self.class == Reservation::ActiveRecord_Associations_CollectionProxy) ? Tour.where(id: self.pluck(:tour_id)).uniq : []
  end

  def total_price
    tour.price_type == :fixed_price ? tour.price : tour.price * number_of_passengers
  end
end
