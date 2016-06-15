FactoryGirl.define do
  factory :message do
    sender_id 1
receiver_id 1
title "MyString"
content "MyText"
skip_email false
  end

end
