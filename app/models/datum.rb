class Datum < ActiveRecord::Base
  after_create :check_cities

  def check_cities
     Coordinate.create(city: self.city, state: self.state) if !Coordinate.find_by(city: self.city, state: self.state)
  end
end
