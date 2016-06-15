namespace :fix_migration do
  task :update_visible_to_default => :environment do
    Tour.where.not(visible: true).update_all(visible: false)
  end
end
