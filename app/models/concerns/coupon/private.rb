module Coupon::Private
  extend ActiveSupport::Concern
  include JsonField

  included do
    before_validation :update_json_field
  end

end