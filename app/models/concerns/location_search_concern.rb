module LocationSearchConcern
  extend ActiveSupport::Concern

  included do
    include Elasticsearch::Model
    # after_commit :create_index, on: :create
    # after_commit :update_index, on: :update
    # after_destroy :delete_index

    index_name("tourmega-locations")
    settings analysis: {
      analyzer: {
        default: {
          type: "keyword"
        }
      }
    }, index: { number_of_shards: 10, number_of_replicas: 1 } do
      mapping do
        indexes :address, :analyzer => 'snowball', :boost => 6
        indexes :lat_lng, :type => 'geo_point', lat_lon: true
      end
    end
  end

  module ClassMethods
    def reindex_all_records
      Location.__elasticsearch__.create_index! force: true
      Location.__elasticsearch__.refresh_index!
      Location.import
    end
  end
end
