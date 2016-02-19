class Datum < ActiveRecord::Base
  include Geocoder

  geocoded_by :full_street_address #can also be ip address
  after_validation :geocode

  reverse_geocoded_by :latitude, :longitude
  after_validation :reverse_geocode #auto fetch address

end
