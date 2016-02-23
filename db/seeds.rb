Datum.destroy_all

# New Orleans, Louisiana - Sick

counter = 0
14.times do
  15.times do
    Datum.create(city: "New Orleans", state: "Louisiana", temp:97.7 + rand(0..1.8), time: Date.today - counter, humidity: 0.75 + rand(0.1..0.15), ambient_temp: 65 + rand(0..15))
  end
  5.times do
    Datum.create(city: "New Orleans", state: "Louisiana", temp:95 + rand(0..5.9), time: Date.today - counter, humidity: 0.75 + rand(0.1..0.15), ambient_temp: 65 + rand(0..15))
  end
  5.times do
    Datum.create(city: "New Orleans", state: "Louisiana", temp:98.6 + rand(0..5.9), time: Date.today - counter, humidity: 0.75 + rand(0.1..0.15), ambient_temp: 65 + rand(0..15))
  end
  10.times do
    Datum.create(city: "New Orleans", state: "Louisiana", temp:99.5 + rand(0..6), time: Date.today - counter, humidity: 0.75 + rand(0.1..0.15), ambient_temp: 65 + rand(0..15))
  end
  5.times do
    Datum.create(city: "New Orleans", state: "Louisiana", temp:99.5 + rand(0..3.5), time: Date.today - counter, humidity: 0.75 + rand(0.1..0.15), ambient_temp: 65 + rand(0..15))
  end

  counter += 1
end

16.times do
    20.times do
    Datum.create(city: "New Orleans", state: "Louisiana", temp:97.7 + rand(0..1.8), time: Date.today - counter, humidity: 0.72 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  end
  10.times do
    Datum.create(city: "New Orleans", state: "Louisiana", temp:95 + rand(0..5.9), time: Date.today - counter, humidity: 0.72 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  end
  5.times do
    Datum.create(city: "New Orleans", state: "Louisiana", temp:98.6 + rand(0..5.9), time: Date.today - counter, humidity: 0.72 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  end

  counter += 1
end

# Deer Lodge, Montana - Sick

counter = 0
30.times do
  15.times do
    Datum.create(city: "Deer Lodge", state: "Montana", temp:97.7 + rand(0..1.8), time: Date.today - counter, humidity: 0.64 + rand(0.25..0.31), ambient_temp: 65 + rand(0..15))
  end
  2.times do
    Datum.create(city: "Deer Lodge", state: "Montana", temp:95 + rand(0..5.9), time: Date.today - counter, humidity: 0.64 + rand(0.25..0.31), ambient_temp: 65 + rand(0..15))
  end
  8.times do
    Datum.create(city: "Deer Lodge", state: "Montana", temp:98.6 + rand(0..5.9), time: Date.today - counter, humidity: 0.64 + rand(0.25..0.31), ambient_temp: 65 + rand(0..15))
  end
  12.times do
    Datum.create(city: "Deer Lodge", state: "Montana", temp:99.5 + rand(0..6), time: Date.today - counter, humidity: 0.64 + rand(0.25..0.31), ambient_temp: 65 + rand(0..15))
  end

  counter += 1
end

# New York, New York - Sick

counter = 0
30.times do
  15.times do
    Datum.create(city: "New York", state: "New York", temp:97.7 + rand(0..1.8), time: Date.today - counter, humidity: 0.74 + rand(0.1..0.2), ambient_temp: 45 + rand(0..15))
  end
  5.times do
    Datum.create(city: "New York", state: "New York", temp:95 + rand(0..5.9), time: Date.today - counter, humidity: 0.74 + rand(0.1..0.2), ambient_temp: 45 + rand(0..15))
  end
  5.times do
    Datum.create(city: "New York", state: "New York", temp:98.6 + rand(0..5.9), time: Date.today - counter, humidity: 0.74 + rand(0.1..0.2), ambient_temp: 45 + rand(0..15))
  end
  3.times do
    Datum.create(city: "New York", state: "New York", temp:94 + rand(0..2), time: Date.today - counter, humidity: 0.74 + rand(0.1..0.2), ambient_temp: 45 + rand(0..15))
  end
  12.times do
    Datum.create(city: "New York", state: "New York", temp:99.5 + rand(0..6), time: Date.today - counter, humidity: 0.74 + rand(0.1..0.2), ambient_temp: 45 + rand(0..15))
  end

  counter += 1
end

# Oakland, California - Normal
counter = 0
31.times do
  20.times do
    Datum.create(city: "Oakland", state: "California", temp:97.7 + rand(0..1.8), time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  end
  10.times do
    Datum.create(city: "Oakland", state: "California", temp:95 + rand(0..5.9), time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  end
  5.times do
    Datum.create(city: "Oakland", state: "California", temp:98.6 + rand(0..5.9), time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  end

  counter += 1
end

# Mountain View, California - Normal

counter = 0
30.times do
  20.times do
    Datum.create(city: "Mountain View", state: "California", temp:97.7 + rand(0..1.8), time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  end
  10.times do
    Datum.create(city: "Mountain View", state: "California", temp:95 + rand(0..5.9), time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  end
  5.times do
    Datum.create(city: "Mountain View", state: "California", temp:98.6 + rand(0..5.9), time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  end

  counter += 1
end

# Atlanta, Georgia - Normal

counter = 0
30.times do
  20.times do
    Datum.create(city: "Atlanta", state: "Georgia", temp:97.7 + rand(0..1.8), time: Date.today - counter, humidity: 0.72 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  end
  10.times do
    Datum.create(city: "Atlanta", state: "Georgia", temp:95 + rand(0..5.9), time: Date.today - counter, humidity: 0.72 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  end
  5.times do
    Datum.create(city: "Atlanta", state: "Georgia", temp:98.6 + rand(0..5.9), time: Date.today - counter, humidity: 0.72 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  end

  counter += 1
end

# Boston, Massachusetts - Normal

counter = 0
30.times do
  20.times do
    Datum.create(city: "Boston", state: "Massachusetts", temp:97.7 + rand(0..1.8), time: Date.today - counter, humidity: 0.68 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  end
  10.times do
    Datum.create(city: "Boston", state: "Massachusetts", temp:95 + rand(0..5.9), time: Date.today - counter, humidity: 0.68 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  end
  5.times do
    Datum.create(city: "Boston", state: "Massachusetts", temp:98.6 + rand(0..5.9), time: Date.today - counter, humidity: 0.68 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  end

  counter += 1
end


# Topeka, Kansas - Normal

counter = 0
30.times do
  20.times do
    Datum.create(city: "Topeka", state: "Kansas", temp:97.7 + rand(0..1.8), time: Date.today - counter, humidity: 0.68 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  end
  10.times do
    Datum.create(city: "Topeka", state: "Kansas", temp:95 + rand(0..5.9), time: Date.today - counter, humidity: 0.68 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  end
  5.times do
    Datum.create(city: "Topeka", state: "Kansas", temp:98.6 + rand(0..5.9), time: Date.today - counter, humidity: 0.68 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  end

  counter += 1
end

# Happyland, Connecticut - Normal

counter = 0
30.times do
  20.times do
    Datum.create(city: "Happyland", state: "Connecticut", temp:97.7 + rand(0..1.8), time: Date.today - counter, humidity: 0.68 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  end
  10.times do
    Datum.create(city: "Happyland", state: "Connecticut", temp:95 + rand(0..5.9), time: Date.today - counter, humidity: 0.68 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  end
  5.times do
    Datum.create(city: "Happyland", state: "Connecticut", temp:98.6 + rand(0..5.9), time: Date.today - counter, humidity: 0.68 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  end

  counter += 1
end

# Why, Arizona - Normal

counter = 0
30.times do
  20.times do
    Datum.create(city: "Why", state: "Arizona", temp:97.7 + rand(0..1.8), time: Date.today - counter, humidity: 0.48 + rand(0.1..0.2), ambient_temp: 75 + rand(0..15))
  end
  10.times do
    Datum.create(city: "Why", state: "Arizona", temp:95 + rand(0..5.9), time: Date.today - counter, humidity: 0.48 + rand(0.1..0.2), ambient_temp: 75 + rand(0..15))
  end
  5.times do
    Datum.create(city: "Why", state: "Arizona", temp:98.6 + rand(0..5.9), time: Date.today - counter, humidity: 0.48 + rand(0.1..0.2), ambient_temp: 75 + rand(0..15))
  end

  counter += 1
end

# Two Egg, Florida - Normal

counter = 0
30.times do
  20.times do
    Datum.create(city: "Two Egg", state: "Florida", temp:97.7 + rand(0..1.8), time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), ambient_temp: 75 + rand(0..15))
  end
  10.times do
    Datum.create(city: "Two Egg", state: "Florida", temp:95 + rand(0..5.9), time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), ambient_temp: 75 + rand(0..15))
  end
  5.times do
    Datum.create(city: "Two Egg", state: "Florida", temp:98.6 + rand(0..5.9), time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), ambient_temp: 75 + rand(0..15))
  end

  counter += 1
end

# Akron, Ohio - Normal

counter = 0
30.times do
  20.times do
    Datum.create(city: "Akron", state: "Ohio", temp:97.7 + rand(0..1.8), time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  end
  10.times do
    Datum.create(city: "Akron", state: "Ohio", temp:95 + rand(0..5.9), time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  end
  5.times do
    Datum.create(city: "Akron", state: "Ohio", temp:98.6 + rand(0..5.9), time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  end

  counter += 1
end

# Miami, Florida - Normal

counter = 0
30.times do
  20.times do
    Datum.create(city: "Miami", state: "Florida", temp:97.7 + rand(0..1.8), time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), ambient_temp: 75 + rand(0..15))
  end
  10.times do
    Datum.create(city: "Miami", state: "Florida", temp:95 + rand(0..5.9), time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), ambient_temp: 75 + rand(0..15))
  end
  5.times do
    Datum.create(city: "Miami", state: "Florida", temp:98.6 + rand(0..5.9), time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), ambient_temp: 75 + rand(0..15))
  end

  counter += 1
end

# Portland, Oregon - Normal

counter = 0
30.times do
  20.times do
    Datum.create(city: "Portland", state: "Oregon", temp:97.7 + rand(0..1.8), time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  end
  10.times do
    Datum.create(city: "Portland", state: "Oregon", temp:95 + rand(0..5.9), time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  end
  5.times do
    Datum.create(city: "Portland", state: "Oregon", temp:98.6 + rand(0..5.9), time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  end

  counter += 1
end

# Honolulu, Hawaii - Normal

counter = 0
30.times do
  20.times do
    Datum.create(city: "Honolulu", state: "Hawaii", temp:97.7 + rand(0..1.8), time: Date.today - counter, humidity: 0.75 + rand(0.15..0.2), ambient_temp: 75 + rand(0..15))
  end
  10.times do
    Datum.create(city: "Honolulu", state: "Hawaii", temp:95 + rand(0..5.9), time: Date.today - counter, humidity: 0.75 + rand(0.15..0.2), ambient_temp: 75 + rand(0..15))
  end
  5.times do
    Datum.create(city: "Honolulu", state: "Hawaii", temp:98.6 + rand(0..5.9), time: Date.today - counter, humidity: 0.75 + rand(0.15..0.2), ambient_temp: 75 + rand(0..15))
  end

  counter += 1
end

# Juno, Alaska - Normal

counter = 0
30.times do
  20.times do
    Datum.create(city: "Juno", state: "Alaska", temp:97.7 + rand(0..1.8), time: Date.today - counter, humidity: 0.65 + rand(0.15..0.2), ambient_temp: 35 + rand(0..15))
  end
  10.times do
    Datum.create(city: "Juno", state: "Alaska", temp:95 + rand(0..5.9), time: Date.today - counter, humidity: 0.65 + rand(0.15..0.2), ambient_temp: 35 + rand(0..15))
  end
  5.times do
    Datum.create(city: "Juno", state: "Alaska", temp:98.6 + rand(0..5.9), time: Date.today - counter, humidity: 0.65 + rand(0.15..0.2), ambient_temp: 35 + rand(0..15))
  end

  counter += 1
end

# Fort Lauderdale, Florida - Normal

counter = 0
30.times do
  20.times do
    Datum.create(city: "Fort Lauderdale", state: "Florida", temp:97.7 + rand(0..1.8), time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), ambient_temp: 75 + rand(0..15))
  end
  10.times do
    Datum.create(city: "Fort Lauderdale", state: "Florida", temp:95 + rand(0..5.9), time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), ambient_temp: 75 + rand(0..15))
  end
  5.times do
    Datum.create(city: "Fort Lauderdale", state: "Florida", temp:98.6 + rand(0..5.9), time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), ambient_temp: 75 + rand(0..15))
  end

  counter += 1
end

# Lincoln, Nebraska - Normal

counter = 0
30.times do
  20.times do
    Datum.create(city: "Lincoln", state: "Nebraska", temp:97.7 + rand(0..1.8), time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  end
  10.times do
    Datum.create(city: "Lincoln", state: "Nebraska", temp:95 + rand(0..5.9), time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  end
  5.times do
    Datum.create(city: "Lincoln", state: "Nebraska", temp:98.6 + rand(0..5.9), time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), ambient_temp: 65 + rand(0..15))
  end

  counter += 1
end

# Cheyenne, Wyoming - Normal

counter = 0
30.times do
  20.times do
    Datum.create(city: "Cheyenne", state: "Wyoming", temp:97.7 + rand(0..1.8), time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), ambient_temp: 60 + rand(0..15))
  end
  10.times do
    Datum.create(city: "Cheyenne", state: "Wyoming", temp:95 + rand(0..5.9), time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), ambient_temp: 60 + rand(0..15))
  end
  5.times do
    Datum.create(city: "Cheyenne", state: "Wyoming", temp:98.6 + rand(0..5.9), time: Date.today - counter, humidity: 0.64 + rand(0.1..0.2), ambient_temp: 60 + rand(0..15))
  end

  counter += 1
end
