Datum.destroy_all

# San Francisco - Normal
counter = 0
14.times do
  20.times do
    Datum.create(city: "San Francisco", state: "California", temp:97.7 + rand(0..1.8), time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  end
  10.times do
    Datum.create(city: "San Francisco", state: "California", temp:95 + rand(0..5.9), time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  end
  5.times do
    Datum.create(city: "San Francisco", state: "California", temp:98.6 + rand(0..5.9), time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  end

  counter += 1
end



# counter = 0
# 7.times do
#   Datum.create(city: "New York", state: "New York", temp:94 + rand(0..5), time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), barometric_pressure: 30.17 + rand(0.1..1.5), ambient_temp: 40 + rand(0..15))
#   counter += 1
#   sleep(0.5)
# end

# counter = 0
# 7.times do
#   Datum.create(city: "Mountain View", state: "California", temp:94 + rand(0..5), time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), barometric_pressure: 30.17 + rand(0.1..1.5), ambient_temp: 65 + rand(0..15))
#   counter += 1
#   sleep(0.5)
# end

# counter = 0
# 7.times do
#   Datum.create(city: "Atlanta", state: "Georgia", temp:94 + rand(0..5), time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), barometric_pressure: 30.17 + rand(0.1..1.5), ambient_temp: 65 + rand(0..15))
#   counter += 1
#   sleep(0.5)
# end

# counter = 0
# 7.times do
#   Datum.create(city: "Boston", state: "Massachusetts", temp:94 + rand(0..5), time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), barometric_pressure: 30.17 + rand(0.1..1.5), ambient_temp: 65 + rand(0..15))
#   counter += 1
#   sleep(0.5)
# end

# counter = 0
# 7.times do
#   Datum.create(city: "Austin", state: "Texas", temp:94 + rand(0..5), time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), barometric_pressure: 30.17 + rand(0.1..1.5), ambient_temp: 85 + rand(0..15))
#   counter += 1
#   sleep(0.5)
# end
