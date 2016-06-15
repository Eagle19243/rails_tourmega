namespace :tournative do
  task :migrate => :environment do
    page = 1
    loop do
      p "From Tournative: Page #{page}"
      uri = URI("https://www.tournative.com/api/v2/experiences/search.json?search[query]=&page=#{page}")
      req = Net::HTTP::Get.new(uri)
      req['Authorization'] = "TourNativeAPI 2c8b2e1a50b7ba93ce80afcfe400b4af"
      http = Net::HTTP.new(uri.host, uri.port)
      http.verify_mode = OpenSSL::SSL::VERIFY_PEER
      http.use_ssl = true

      response = http.start { |http| http.request(req) }
      tours = JSON.parse(response.body).try(:[], 'experiences')
      break unless tours.present?

      p "Importing #{tours.size} tours"
      print "Successfully: "
      tours.each do |tour_json|
        import_tour(tour_json['id'])
        print "#{tour_json['id']} "
      end
      page += 1
    end
  end
end

def import_tour(tour_id)
  return if TourImport.exists?(service_id: TourImport::TOUR_NATIVE, service_tour_id: tour_id)

  uri = URI("https://www.tournative.com/api/v2/experiences/#{tour_id}")
  req = Net::HTTP::Get.new(uri)
  req['Authorization'] = "TourNativeAPI 2c8b2e1a50b7ba93ce80afcfe400b4af"
  http = Net::HTTP.new(uri.host, uri.port)
  http.use_ssl = true

  begin
    response = http.start { |http| http.request(req) }
    tour_json = JSON.parse(response.body)['experience']
    user_json = tour_json['guide']['guide_basic']
    location_json = tour_json['location']['location']

    user = User.import_from_external(user_json, 'tournative')
    location = Location.import_from_external(location_json)
    Tour.import_from_external(tour_id, tour_json, user, location) if user.present?
  rescue => e
    p "Cannot import tour##{tour_id}: #{e}"
  end
end
