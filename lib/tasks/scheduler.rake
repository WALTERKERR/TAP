namespace :seed do
  Dir[File.join(Rails.root, 'db', 'custom_seed', '*.rb')].each do |filename|
    task_name = File.basename(filename, '.rb').intern
    task :seed_database => :environment do
      puts "Updating database with seed files..."
      load(filename) if File.exist?(filename)
      puts "done."
    end
  end
end