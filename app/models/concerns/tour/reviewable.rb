module Tour::Reviewable
  extend ActiveSupport::Concern

  included do
    include AASM
    include AASMLinearity

    STATUSES = [
      PROFILE = :profile,
      ITINERARY = :itinerary,
      INFO = :additional_info,
      PENDING  = :pending,
      WAIT_FOR_APPROVED = :wait_for_approved,
      APPROVED = :approved,
      DECLINED = :declined
    ]

    aasm column: :status do
      state PROFILE, initial: true
      state ITINERARY
      state INFO
      state PENDING
      state WAIT_FOR_APPROVED
      state APPROVED
      state DECLINED

      event :go_to_itinerary do
        transitions from: PROFILE, to: ITINERARY
      end

      event :go_to_additional_info do
        transitions from: ITINERARY, to: INFO
      end

      event :go_to_preview do
        transitions from: INFO, to: PENDING
      end

      event :wait_for_approved do
        transitions from: PENDING, to: WAIT_FOR_APPROVED
      end

      event :approved do
        transitions from: WAIT_FOR_APPROVED, to: APPROVED
      end

      event :declined do
        transitions from: WAIT_FOR_APPROVED, to: DECLINED
      end

      event :pending do
        transitions to: PENDING
      end

      event :force_approved do
        transitions to: APPROVED
      end
    end
  end

  private

end