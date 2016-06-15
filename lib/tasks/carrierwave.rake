namespace :carrierwave do
  task :clean_garbage_dirs => :environment do
    CarrierWave.clean_cached_files!
  end
end
