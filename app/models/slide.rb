class Slide < ActiveRecord::Base
  mount_uploader :image, ImageUploader

  validates_presence_of :caption, message: "Please enter a caption."
  validates_presence_of :location, message: "Please enter a location."
end
