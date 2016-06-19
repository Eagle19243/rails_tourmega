module TourSearchConcern
  extend ActiveSupport::Concern

  included do
    include Elasticsearch::Model
    include Elasticsearch::Model::Callbacks
    after_commit :create_index, on: :create
    after_commit :update_index, on: :update
    after_destroy :delete_index

    index_name "tourmega-tours"
    settings analysis: {
      analyzer: {
        default: {
          type: "keyword"
        },
        google_place_analyzer: {
          type: "keyword",
          tokenizer: 'whitespace'
        }
      }
    }, index: { number_of_shards: Figaro.env.number_of_shards, number_of_replicas: Figaro.env.number_of_replicas } do
      mapping do
        indexes :id, index: :not_analyzed
        indexes :name, analyzer: 'snowball', boost: 10
        indexes :price, type: 'float'
        indexes :duration_in_minutes, type: 'long'
        indexes :min_quantity, type: 'long'
        indexes :max_quantity, type: 'long'
        indexes :visible, type: 'boolean'
        indexes :slug, type: 'string', index: :not_analyzed
        indexes :price_type, type: 'string', index: :not_analyzed
        indexes :user_id, :index => :not_analyzed
        indexes :category_ids, type: 'string'
        indexes :created_at, type: 'date', format: 'dd/MM/yyyy'
        indexes :updated_at, type: 'date', format: 'dd/MM/yyyy'
        indexes :languages, type: 'string'
        indexes :pickup_location do
          indexes :address, :analyzer => 'snowball', :boost => 6
          indexes :lat_lng, :type => 'geo_point', lat_lon: true
        end

        indexes :location do
          indexes :address, :analyzer => 'snowball', :boost => 6
          indexes :lat_lng, :type => 'geo_point', lat_lon: true
        end
      end
    end

    def as_indexed_json(options={})
      TourIndexSerializer.new(self).attributes
    end

    private

    def create_index
      ToursIndexerWorker.perform_async(:index,  self.id)
    end

    def update_index
      ToursIndexerWorker.perform_async(:update,  self.id) if index_changed?
    end

    def delete_index
      ToursIndexerWorker.perform_async(:delete, self.id)
    end

    def index_changed?
      fail 'Please override'
    end
  end

  module ClassMethods
    def reindex_all_records
      index_exists = Tour.__elasticsearch__.client.search_exists rescue false
      Tour.__elasticsearch__.create_index! force: true unless index_exists
      p 'Reindexing all tours'
      errors_count = Tour.__elasticsearch__.import refresh: true, force: true
      p "Finished with #{errors_count} errors"
    end
  end

end
