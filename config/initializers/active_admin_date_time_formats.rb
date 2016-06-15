ActiveAdminDatetimepicker::Base.default_datetime_picker_options = {
  defaultDate: proc { Date.current.strftime("%Y-%m-%d 00:00") }
}
ActiveAdminDatetimepicker::Base.format = "%Y-%m-%d %H:%M:%S"
