desc "Scheduler task to create seeds"
task :seed_database => :environment do
  puts "Updating database with seed files..."
  require APP_ROOT.join('db', 'daily_seeds.rb')
  puts "done."
end
