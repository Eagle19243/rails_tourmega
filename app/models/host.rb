class Host < ActiveRecord::Base
  belongs_to :user
  mount_uploaders :certificates, ImageUploader

  delegate :email, :name, :first_name, :last_name, :avatar, :avatar_url, :name, :primary_address, :guide_type, :gender, :job_title, :date_of_birth, :hobbies, :social_pages, :phone, :nationality, :nationality_id, :biography, to: :user
  validates :skype_id, :traveller_background, :experience_background, :reason, presence: true
end
