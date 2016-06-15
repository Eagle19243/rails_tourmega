module User::Private
  extend ActiveSupport::Concern
  include JsonField

  included do
    before_validation :add_slug_if_not_assigned, on: :create
    before_validation :update_json_field
    after_validation :generate_invite_code, on: :create
  end

  private

  def add_slug_if_not_assigned
    self.username = (first_name && last_name) ? "#{first_name}_#{last_name}".downcase : "#{self.email[/^[^@]+/]}_#{Devise.friendly_token}"
  end

  def generate_invite_code
    self.invite_code = SecureRandom.uuid
  end
end