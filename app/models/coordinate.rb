class Coordinate < ActiveRecord::Base
  geocoded_by :address
  after_validation :geocode

  def address
    [city, state].compact.join(', ')
  end
end
