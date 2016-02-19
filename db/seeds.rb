# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

3.times do |outside_counter|
  3.times do |inside_counter|
    Datum.create(street_address: "633 Folsom Street", zip: "94107", temp:98.25 + rand(-0.73..0.73), time: Date.today + (outside_counter+1) + inside_counter)
  end
end

3.times do |outside_counter|
  3.times do |inside_counter|
    Datum.create(street_address: "1600 Clifton Rd", zip: "30333", temp:98.25 + rand(5..8), time: Date.today + (outside_counter+1) + inside_counter)
  end
end

3.times do |outside_counter|
  3.times do |inside_counter|
    Datum.create(street_address: "Kennedy Parkway North", zip: "32899", temp:98.25 + rand(-0.73..0.73), time: Date.today + (outside_counter+1) + inside_counter)
  end
end

3.times do |outside_counter|
  3.times do |inside_counter|
    Datum.create(street_address: "60 Garden St", zip: "02138", temp:98.25 + rand(-0.73..0.73), time: Date.today + (outside_counter+1) + inside_counter)
  end
end

3.times do |outside_counter|
  3.times do |inside_counter|
    Datum.create(street_address: "907 Whitehead Street", zip: "33040", temp:98.25 + rand(-0.73..0.73), time: Date.today + (outside_counter+1) + inside_counter)
  end
end


# 3.times do |outside_counter|
#   3.times do |inside_counter|
#     Datum.create(street_address: "5801 Wilshire Blvd", zip: "90036", temp:98.25 + rand(-0.73..0.73), time: Date.today + (outside_counter+1) + inside_counter)
#   end
# end

# 3.times do |outside_counter|
#   3.times do |inside_counter|
#     Datum.create(street_address: "2920 Zoo Dr", zip: "92101", temp:98.25 + rand(-0.73..0.73), time: Date.today + (outside_counter+1) + inside_counter)
#   end
# end

# 3.times do |outside_counter|
#   3.times do |inside_counter|
#     Datum.create(street_address: "30 Rockefeller Plz", zip: "10112", temp:98.25 + rand(-0.73..0.73), time: Date.today + (outside_counter+1) + inside_counter)
#   end
# end

# 3.times do |outside_counter|
#   3.times do |inside_counter|
#     Datum.create(street_address: "1600 Amphitheatre Parkway", zip: "94043", temp:98.25 + rand(-0.73..0.73), time: Date.today + (outside_counter+1) + inside_counter)
#   end
# end
