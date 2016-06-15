module ReservationsHelper
  STEPS = %w(passenger billing_information review_and_submit)

  STEPS.each_with_index do |step, index|
    define_method "display_#{step}_bar" do
      "<div class='small-number'>#{index + 1}</div> <div class='inline'>#{step.titleize}</div>".html_safe
    end
  end
end
