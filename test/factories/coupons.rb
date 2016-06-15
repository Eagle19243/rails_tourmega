FactoryGirl.define do
  factory :coupon do
    code "MyString"
expired_date "2016-01-24"
percentage "9.99"
value "9.99"
minimum_invoice "9.99"
applied_all false
applied_area ""
  end

end
