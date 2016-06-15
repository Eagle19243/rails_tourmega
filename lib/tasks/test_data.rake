namespace :test_data do
  desc 'Fill database with test data'
  task :populate => [:environment, "db:reset"] do
    require 'factory_girl'
    # p __FILE__
    # Dir['spec/factories/*'].each { |f| require f[0..-4] }
    p File.expand_path('../../spec/factories', __FILE__)
    FactoryGirl.definition_file_paths = [File.expand_path('../../../spec/factories', __FILE__)]
    FactoryGirl.find_definitions
    p "Manifacturing Objects..."
    (1..100).each  {
      FactoryGirl.create(:tour)
    }
  end
end
