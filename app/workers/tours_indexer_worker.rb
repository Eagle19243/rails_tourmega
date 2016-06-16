class ToursIndexerWorker
  include Sidekiq::Worker
  sidekiq_options queue: 'elasticsearch', retry: false
  Logger = Sidekiq.logger.level == Logger::DEBUG ? Sidekiq.logger : nil
  Client = Elasticsearch::Client.new(url: ENV['ES_SERVER_URL'], logger: Logger)

  def perform(operation, record_id)
    logger.debug [operation, "ID: #{record_id}"]
    case operation.to_s
      when /index/
        record = Tour.find(record_id)
        Client.index index: 'tourmega-tours', type: 'tour', id: record.id, body: record.as_indexed_json
      when /delete/
        Client.delete index: 'tourmega-tours', type: 'tour', id: record_id
      else raise ArgumentError, "Unknown operation '#{operation}'"
    end
  end

end