# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default(0), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :inet
#  last_sign_in_ip        :inet
#  confirmation_token     :string
#  confirmed_at           :datetime
#  confirmation_sent_at   :datetime
#  unconfirmed_email      :string
#  failed_attempts        :integer          default(0), not null
#  locked_at              :datetime
#  username               :string
#  first_name             :string
#  last_name              :string
#  gender                 :string
#  slug                   :string
#  language               :string
#  avatar                 :string
#  location_id            :integer
#  created_at             :datetime
#  updated_at             :datetime
#  provider               :string
#  uid                    :string
#

require 'ffaker'

FactoryGirl.define do
  factory :user do
    email { FFaker::Internet.email }
    password '12345678'
  end
end
