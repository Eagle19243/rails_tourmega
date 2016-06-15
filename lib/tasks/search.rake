namespace :search do
  task :reindex => :environment do
    Tour.reindex_all_records
  end
end
