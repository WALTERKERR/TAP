Datum.destroy_all

class RandomGaussian
  def initialize(mean, stddev, rand_helper = lambda { Kernel.rand })
    @rand_helper = rand_helper
    @mean = mean
    @stddev = stddev
    @valid = false
    @next = 0
  end

  def rand
    if @valid then
      @valid = false
      return @next
    else
      @valid = true
      x, y = self.class.gaussian(@mean, @stddev, @rand_helper)
      @next = y
      return x
    end
  end

  private
  def self.gaussian(mean, stddev, rand)
    theta = 2 * Math::PI * rand.call
    rho = Math.sqrt(-2 * Math.log(1 - rand.call))
    scale = stddev * rho
    x = mean + scale * Math.cos(theta)
    y = mean + scale * Math.sin(theta)
    return x, y
  end
end


def gaussian(mean, stddev, rand)
  theta = 2 * Math::PI * rand.call
  rho = Math.sqrt(-2 * Math.log(1 - rand.call))
  scale = stddev * rho
  x = mean + scale * Math.cos(theta)
  y = mean + scale * Math.sin(theta)
  return x, y
end


normal_temp = RandomGaussian.new(98.25, 0.73)


sick_temp = RandomGaussian.new(99, 0.73)

normal_temps_ambient = RandomGaussian.new(65, 10.5)
normal_humidity = RandomGaussian.new(0.3, 0.11)

sick_humidity = RandomGaussian.new(0.6, 0.11)
sick_temps_ambient = RandomGaussian.new(70, 8)






# Oklahoma City, OK - Sick

counter = 0
1.times do
  500.times do
    Datum.create(city: "Oklahoma City", state: "Oklahoma", temp:normal_temp.rand, time: Date.today - rand(0..30), humidity: sick_humidity.rand, ambient_temp: sick_temps_ambient.rand)
  end
  200.times do
    Datum.create(city: "Oklahoma City", state: "Oklahoma", temp:sick_temp.rand, time: Date.today - rand(0..7), humidity: sick_humidity.rand, ambient_temp: sick_temps_ambient.rand)
  end
  # 5.times do
  #   Datum.create(city: "New Orleans", state: "Louisiana", temp:sick_temp.rand, time: Date.today - counter, humidity: 0.75 + rand(0.1..0.15), ambient_temp: 65 + rand(0..15))
  # end
  # 10.times do
  #   Datum.create(city: "New Orleans", state: "Louisiana", temp:98.5 + rand(0..6), time: Date.today - counter, humidity: 0.75 + rand(0.1..0.15), ambient_temp: 65 + rand(0..15))
  # end
  # 5.times do
  #   Datum.create(city: "New Orleans", state: "Louisiana", temp:99.5 + rand(0..3.5), time: Date.today - counter, humidity: 0.75 + rand(0.1..0.15), ambient_temp: 65 + rand(0..15))
  # end

  counter += 1
end

# 16.times do
#     20.times do
#     Datum.create(city: "New Orleans", state: "Louisiana", temp:97.7 + rand(0..1.8), time: Date.today - counter, humidity: 0.72 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
#   end
#   5.times do
#     Datum.create(city: "New Orleans", state: "Louisiana", temp:95 + rand(0..5.9), time: Date.today - counter, humidity: 0.72 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
#   end
  # 5.times do
  #   Datum.create(city: "New Orleans", state: "Louisiana", temp:sick_temp.rand, time: Date.today - counter, humidity: 0.72 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  # end

#   counter += 1
# end

# Tulsa, Oklahoma - Sick

counter = 0
1.times do
  400.times do
    Datum.create(city: "Tulsa", state: "Oklahoma", temp:normal_temp.rand, time: Date.today - rand(0..30), humidity: sick_humidity.rand, ambient_temp: sick_temps_ambient.rand)
  end
  175.times do
    Datum.create(city: "Tulsa", state: "Oklahoma", temp:sick_temp.rand, time: Date.today - rand(0..10), humidity: sick_humidity.rand, ambient_temp: sick_temps_ambient.rand)
  end
  # 8.times do
  #   Datum.create(city: "Deer Lodge", state: "Montana", temp:sick_temp.rand, time: Date.today - counter, humidity: 0.64 + rand(0.25..0.31), ambient_temp: 65 + rand(0..15))
  # end
  # 12.times do
  #   Datum.create(city: "Deer Lodge", state: "Montana", temp:99.5 + rand(0..6), time: Date.today - counter, humidity: 0.64 + rand(0.25..0.31), ambient_temp: 65 + rand(0..15))
  # end

  counter += 1
end

# Norman, Oklahoma - Sick

counter = 0
1.times do
  500.times do
    Datum.create(city: "Norman", state: "Oklahoma", temp:normal_temp.rand, time: Date.today - rand(0..25), humidity: sick_humidity.rand, ambient_temp: sick_temps_ambient.rand)
  end
  150.times do
    Datum.create(city: "Norman", state: "Oklahoma", temp:sick_temp.rand, time: Date.today - rand(0..8), humidity: sick_humidity.rand, ambient_temp: sick_temps_ambient.rand)
  end
  # 5.times do
  #   Datum.create(city: "New York", state: "New York", temp:sick_temp.rand, time: Date.today - counter, humidity: 0.74 + rand(0.1..0.2), ambient_temp: 45 + rand(0..15))
  # end
  # 3.times do
  #   Datum.create(city: "New York", state: "New York", temp:94 + rand(0..2), time: Date.today - counter, humidity: 0.74 + rand(0.1..0.2), ambient_temp: 45 + rand(0..15))
  # end
  # 12.times do
  #   Datum.create(city: "New York", state: "New York", temp:99.5 + rand(0..6), time: Date.today - counter, humidity: 0.74 + rand(0.1..0.2), ambient_temp: 45 + rand(0..15))
  # end

  counter += 1
end

# Oakland, California - Normal
counter = 0
1.times do
  300.times do
    Datum.create(city: "Oakland", state: "California", temp:normal_temp.rand, time: Date.today - rand(0..30), humidity: normal_humidity.rand, ambient_temp: normal_temps_ambient.rand)
  end
  5.times do
    Datum.create(city: "Oakland", state: "California", temp:sick_temp.rand, time: Date.today - rand(0..30), humidity: normal_humidity.rand, ambient_temp: normal_temps_ambient.rand)
  end
  # 5.times do
  #   Datum.create(city: "Oakland", state: "California", temp:sick_temp.rand, time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  # end

  counter += 1
end

# Mountain View, California - Normal

counter = 0
1.times do
  300.times do
    Datum.create(city: "Mountain View", state: "California", temp:normal_temp.rand, time: Date.today - rand(0..30), humidity: normal_humidity.rand, ambient_temp: normal_temps_ambient.rand)
  end
  5.times do
    Datum.create(city: "Mountain View", state: "California", temp:sick_temp.rand, time: Date.today - rand(0..30), humidity: normal_humidity.rand, ambient_temp: normal_temps_ambient.rand)
  end
  # 5.times do
  #   Datum.create(city: "Mountain View", state: "California", temp:sick_temp.rand, time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  # end

  counter += 1
end

# Atlanta, Georgia - Normal

counter = 0
1.times do
  200.times do
    Datum.create(city: "Atlanta", state: "Georgia", temp:normal_temp.rand, time: Date.today - rand(0..30), humidity: normal_humidity.rand, ambient_temp: normal_temps_ambient.rand)
  end
  2.times do
    Datum.create(city: "Atlanta", state: "Georgia", temp:sick_temp.rand, time: Date.today - rand(0..30), humidity: normal_humidity.rand, ambient_temp: normal_temps_ambient.rand)
  end
  # 5.times do
  #   Datum.create(city: "Atlanta", state: "Georgia", temp:sick_temp.rand, time: Date.today - counter, humidity: 0.72 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  # end

  counter += 1
end

# Boston, Massachusetts - Normal

counter = 0
1.times do
  200.times do
    Datum.create(city: "Boston", state: "Massachusetts", temp:normal_temp.rand, time: Date.today - rand(0..30), humidity: normal_humidity.rand, ambient_temp: normal_temps_ambient.rand)
  end
  5.times do
    Datum.create(city: "Boston", state: "Massachusetts", temp:sick_temp.rand, time: Date.today - rand(0..30), humidity: normal_humidity.rand, ambient_temp: normal_temps_ambient.rand)
  end
  # 5.times do
  #   Datum.create(city: "Boston", state: "Massachusetts", temp:sick_temp.rand, time: Date.today - counter, humidity: 0.68 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  # end

  counter += 1
end


# Topeka, Kansas - Normal

counter = 0
1.times do
  300.times do
    Datum.create(city: "Topeka", state: "Kansas", temp:normal_temp.rand, time: Date.today - rand(0..30), humidity: normal_humidity.rand, ambient_temp: normal_temps_ambient.rand)
  end
  4.times do
    Datum.create(city: "Topeka", state: "Kansas", temp:sick_temp.rand, time: Date.today - rand(0..30), humidity: normal_humidity.rand, ambient_temp: normal_temps_ambient.rand)
  end
  # 5.times do
  #   Datum.create(city: "Topeka", state: "Kansas", temp:sick_temp.rand, time: Date.today - counter, humidity: 0.68 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  # end

  counter += 1
end

# Hartford, Connecticut - Normal

counter = 0
1.times do
  200.times do
    Datum.create(city: "Happyland", state: "Connecticut", temp:normal_temp.rand, time: Date.today - rand(0..30), humidity: normal_humidity.rand, ambient_temp: normal_temps_ambient.rand)
  end
  5.times do
    Datum.create(city: "Happyland", state: "Connecticut", temp:sick_temp.rand, time: Date.today - rand(0..30), humidity: normal_humidity.rand, ambient_temp: normal_temps_ambient.rand)
  end
  # 5.times do
  #   Datum.create(city: "Happyland", state: "Connecticut", temp:sick_temp.rand, time: Date.today - counter, humidity: 0.68 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  # end

  counter += 1
end

# Why, Arizona - Normal

counter = 0
1.times do
  200.times do
    Datum.create(city: "Why", state: "Arizona", temp:normal_temp.rand, time: Date.today - rand(0..30), humidity: normal_humidity.rand, ambient_temp: normal_temps_ambient.rand)
  end
  2.times do
    Datum.create(city: "Why", state: "Arizona", temp:sick_temp.rand, time: Date.today - rand(0..30), humidity: normal_humidity.rand, ambient_temp: normal_temps_ambient.rand)
  end
  # 5.times do
  #   Datum.create(city: "Why", state: "Arizona", temp:sick_temp.rand, time: Date.today - counter, humidity: 0.48 + rand(0.1..0.2), ambient_temp: 75 + rand(0..15))
  # end

  counter += 1
end

# Two Egg, Florida - Normal

counter = 0
1.times do
  100.times do
    Datum.create(city: "Two Egg", state: "Florida", temp:normal_temp.rand, time: Date.today - rand(0..30), humidity: normal_humidity.rand, ambient_temp: normal_temps_ambient.rand)
  end
  3.times do
    Datum.create(city: "Two Egg", state: "Florida", temp:sick_temp.rand, time: Date.today - rand(0..30), humidity: normal_humidity.rand, ambient_temp: normal_temps_ambient.rand)
  end
  # 5.times do
  #   Datum.create(city: "Two Egg", state: "Florida", temp:sick_temp.rand, time: Date.today - rand(0..30), humidity: 0.64 + rand(0.1..0.2), ambient_temp: 75 + rand(0..15))
  # end

  counter += 1
end

# Akron, Ohio - Normal

counter = 0
1.times do
  100.times do
    Datum.create(city: "Akron", state: "Ohio", temp:normal_temp.rand, time: Date.today - rand(0..30), humidity: normal_humidity.rand, ambient_temp: normal_temps_ambient.rand)
  end
  5.times do
    Datum.create(city: "Akron", state: "Ohio", temp:sick_temp.rand, time: Date.today - rand(0..30), humidity: normal_humidity.rand, ambient_temp: normal_temps_ambient.rand)
  end
  # 5.times do
  #   Datum.create(city: "Akron", state: "Ohio", temp:sick_temp.rand, time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  # end

  counter += 1
end

# Miami, Florida - Normal

counter = 0
1.times do
  100.times do
    Datum.create(city: "Miami", state: "Florida", temp:normal_temp.rand, time: Date.today - rand(0..30), humidity: normal_humidity.rand, ambient_temp: normal_temps_ambient.rand)
  end
  3.times do
    Datum.create(city: "Miami", state: "Florida", temp:sick_temp.rand, time: Date.today - rand(0..30), humidity: normal_humidity.rand, ambient_temp: normal_temps_ambient.rand)
  end
  # 5.times do
  #   Datum.create(city: "Miami", state: "Florida", temp:sick_temp.rand, time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), ambient_temp: 75 + rand(0..15))
  # end

  counter += 1
end

# Portland, Oregon - Normal

counter = 0
1.times do
  200.times do
    Datum.create(city: "Portland", state: "Oregon", temp:normal_temp.rand, time: Date.today - rand(0..30), humidity: normal_humidity.rand, ambient_temp: normal_temps_ambient.rand)
  end
  2.times do
    Datum.create(city: "Portland", state: "Oregon", temp:sick_temp.rand, time: Date.today - rand(0..30), humidity: normal_humidity.rand, ambient_temp: normal_temps_ambient.rand)
  end
  # 5.times do
  #   Datum.create(city: "Portland", state: "Oregon", temp:sick_temp.rand, time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  # end

  counter += 1
end

# Honolulu, Hawaii - Normal

counter = 0
1.times do
  100.times do
    Datum.create(city: "Honolulu", state: "Hawaii", temp:normal_temp.rand, time: Date.today - rand(0..30), humidity: normal_humidity.rand, ambient_temp: normal_temps_ambient.rand)
  end
  1.times do
    Datum.create(city: "Honolulu", state: "Hawaii", temp:sick_temp.rand, time: Date.today - rand(0..30), humidity: normal_humidity.rand, ambient_temp: normal_temps_ambient.rand)
  end

  10.times do
    Datum.create(city: "Honolulu", state: "Hawaii", temp:normal_temp.rand, time: Date.today - rand(0..30), humidity: normal_humidity.rand, ambient_temp: normal_temps_ambient.rand)
  end
  # 5.times do
  #   Datum.create(city: "Honolulu", state: "Hawaii", temp:sick_temp.rand, time: Date.today - counter, humidity: 0.75 + rand(0.15..0.2), ambient_temp: 75 + rand(0..15))
  # end

  counter += 1
end

# Juno, Alaska - Normal

counter = 0
1.times do
  100.times do
    Datum.create(city: "Juneau", state: "Alaska", temp:normal_temp.rand, time: Date.today - rand(0..30), humidity: normal_humidity.rand, ambient_temp: normal_temps_ambient.rand)
  end
  5.times do
    Datum.create(city: "Juneau", state: "Alaska", temp:sick_temp.rand, time: Date.today - rand(0..30), humidity: normal_humidity.rand, ambient_temp: normal_temps_ambient.rand)
  end
  # 5.times do
  #   Datum.create(city: "Juneau", state: "Alaska", temp:sick_temp.rand, time: Date.today - counter, humidity: 0.65 + rand(0.15..0.2), ambient_temp: 35 + rand(0..15))
  # end

  counter += 1
end

# Fort Lauderdale, Florida - Normal

counter = 0
1.times do
  100.times do
    Datum.create(city: "Fort Lauderdale", state: "Florida", temp:normal_temp.rand, time: Date.today - rand(0..30), humidity: normal_humidity.rand, ambient_temp: normal_temps_ambient.rand)
  end
  1.times do
    Datum.create(city: "Fort Lauderdale", state: "Florida", temp:sick_temp.rand, time: Date.today - rand(0..30), humidity: normal_humidity.rand, ambient_temp: normal_temps_ambient.rand)
  end
  # 5.times do
  #   Datum.create(city: "Fort Lauderdale", state: "Florida", temp:sick_temp.rand, time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), ambient_temp: 75 + rand(0..15))
  # end

  counter += 1
end

# Lincoln, Nebraska - Normal

counter = 0
1.times do
  100.times do
    Datum.create(city: "Lincoln", state: "Nebraska", temp:normal_temp.rand, time: Date.today - rand(0..30), humidity: normal_humidity.rand, ambient_temp: normal_temps_ambient.rand)
  end
  2.times do
    Datum.create(city: "Lincoln", state: "Nebraska", temp:sick_temp.rand, time: Date.today - rand(0..30), humidity: normal_humidity.rand, ambient_temp: normal_temps_ambient.rand)
  end
  # 5.times do
  #   Datum.create(city: "Lincoln", state: "Nebraska", temp:sick_temp.rand, time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  # end

  counter += 1
end

# Cheyenne, Wyoming - Normal

counter = 0
1.times do
  100.times do
    Datum.create(city: "Cheyenne", state: "Wyoming", temp:normal_temp.rand, time: Date.today - rand(0..30), humidity: normal_humidity.rand, ambient_temp: normal_temps_ambient.rand)
  end
  2.times do
    Datum.create(city: "Cheyenne", state: "Wyoming", temp:sick_temp.rand, time: Date.today - rand(0..30), humidity: normal_humidity.rand, ambient_temp: normal_temps_ambient.rand)
  end
  # 5.times do
  #   Datum.create(city: "Cheyenne", state: "Wyoming", temp:sick_temp.rand, time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), ambient_temp: 60 + rand(0..15))
  # end

  counter += 1
end



