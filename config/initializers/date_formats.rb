{
  at: '%d/%m/%Y at %H:%M:%S',
  at_hm: '%d/%m/%Y at %H:%M',
  dmy: '%d/%m/%Y',
  ymd: '%Y-%m-%d',
  hm: '%H:%M',
  hmp: '%I:%M %p',
  au_common_with_slashes: '%d/%m/%Y',
  au_common_with_dashes:  '%d-%m-%Y',
  keypay_api: '%Y-%m-%dT%H:%M:%S',
  utc_timestamp: '%Y-%m-%dT%H:%M:%S',
  asset_date: '%d/%m/%Y',
  asset_time: '%H:%M:%S',
  asset_full_time: '%d/%m/%Y %H:%M:%S',
  readable_time: '%d/%m/%Y at %H:%M',
  time_only: '%H:%M',
  default: '%d/%m/%Y'
}.each do |k, v|
  Date::DATE_FORMATS[k] = v
  Time::DATE_FORMATS[k] = v
end
