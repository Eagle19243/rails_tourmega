module UsersHelper
  def display_verified_status(user, source)
    if user.send("#{source}_verified?")
      (source == :phone_number) ? user.phone.mask_all_except_last_numbers(2,'▒') : "Verified"
    else
      "Not Verified"
    end
  end

  def display_signed_up_time(user)
    "Member since #{user.created_at.strftime('%B %Y')}"
  end

end