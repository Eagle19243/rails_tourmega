desc "This task is called by the Heroku scheduler add-on"

desc 'Tasks that need to be run daily by Heroku scheduler'
task :daily => :environment do
  tasks = [
    'tournative:migrate',
    'carrierwave:clean_garbage_dirs'
  ]

  tasks.each { |task| Rake::Task[task].invoke }
end

task :weekly => :environment do
  tasks = [
  ]

  tasks.each { |task| Rake::Task[task].invoke }
end

task :monthly => :environment do
  tasks = [
  ]

  tasks.each { |task| Rake::Task[task].invoke }
end
