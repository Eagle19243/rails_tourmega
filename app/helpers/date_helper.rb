module DateHelper
  def date_input_format(date)
    date.blank? ? "" : date.to_s(:dmy)
  end

  def day_in_week(date)
    date.strftime('%A')
  end

  def date_at_time(time)
    time.strftime('%d/%m/%Y at %H:%M:%S')
  end

  def formatted_date(date)
    at_date = date_input_format(date)
    at_time = date.strftime('%R')

    "#{at_date} on #{at_time}"
  end
end
