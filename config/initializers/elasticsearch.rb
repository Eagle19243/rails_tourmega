elasticsearch_url = ENV['BONSAI_URL']
Elasticsearch::Model.client = Elasticsearch::Client.new url: elasticsearch_url if elasticsearch_url
