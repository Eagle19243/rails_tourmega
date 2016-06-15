# == Schema Information
#
# Table name: tours
#
#  id                  :integer          not null, primary key
#  name                :string
#  description         :text
#  overview            :text
#  price               :decimal(, )
#  user_id             :integer
#  location_id         :integer
#  duration_in_minutes :integer
#  meeting_point_id    :integer
#  min_quantity        :integer
#  max_quantity        :integer
#  visible             :boolean
#  status              :string
#  slug                :string
#  instant_booking     :boolean
#  price_type          :string
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#

require 'ffaker'

FactoryGirl.define do
  factory :tour do
    name { FFaker::Name.name }
    description { FFaker::Lorem.paragraph }
    overview { FFaker::Lorem.paragraph }
    price 1.0
    duration_in_minutes 60
    min_quantity 1
    max_quantity 10
    visible true
    status 'approved'
    instant_booking false
    price_type 'fix'
    association :user, factory: :user
    association :location, factory: :location
    # association :meeting_point, factory: :location
  end
end
