elasticsearch_url = ENV['ES_SERVER_URL']
Elasticsearch::Model.client = Elasticsearch::Client.new url: elasticsearch_url if elasticsearch_url
