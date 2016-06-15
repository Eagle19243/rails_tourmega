# == Schema Information
#
# Table name: locations
#
#  id              :integer          not null, primary key
#  name            :string
#  short_name      :string
#  latitude        :decimal(, )
#  longitude       :decimal(, )
#  location_type   :string
#  google_place_id :string
#  slug            :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'ffaker'

FactoryGirl.define do
  factory :location do
    name FFaker::Lorem.sentence
    short_name FFaker::Lorem.words
    latitude FFaker::Geolocation.lat
    longitude FFaker::Geolocation.lng
    location_type 'locality,political'
    google_place_id '17c2d39e5bcf39899027a3c7a1519110f7a8429f'
  end
end
