class Datum < ActiveRecord::Base
  include Geocoder

  geocoded_by :street_address #can also be ip address
  after_validation :geocode, if: ->(obj){ obj.street_address.present? and obj.street_address_changed? }

  reverse_geocoded_by :latitude, :longitude do |obj,results|
    if geo = results.first
      obj.city    = geo.city
      obj.zip = geo.postal_code
      obj.state = geo.state
      obj.street_address = geo.street_address
    end
  end

  after_validation :reverse_geocode, if: ->(obj){ obj.latitude.present? and obj.latitude.present? and (!obj.city.present? or !obj.zip.present? or !obj.state.present?) }

end
