class TourImport < ActiveRecord::Base
  IMPORT_SERVICES = [
    TOUR_NATIVE = 1,
    ANOTHER = 2
  ]

  belongs_to :tour
end
