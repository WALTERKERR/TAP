class DataController < ApplicationController

  def index
    # Calculate average temperatures for each city for the past week
    all_cities = Datum.select(:city, :state).where("time >= ?", Date.today - 7).distinct
    @data = []
    all_cities.each do |city_info|
      city_data = Datum.where(city: city_info.city, state: city_info.state).where("time >= ?", Date.today - 7)

      coordinates = Coordinate.find_by(city: city_info.city, state: city_info.state)

      avg_temp = city_data.reduce(0) {|sum, reading| sum + reading.temp} / city_data.length
      data_hash = { latitude: coordinates.latitude, longitude: coordinates.longitude, temp: avg_temp.round(2), city: city_info.city, state: city_info.state}
      @data << data_hash
    end
    render json: @data
  end

  def find
    city = params[:city]
    state = params[:state]
    timeframe = params[:timeframe].to_i
    @data = Datum.where(city: city, state: state).where("time >= ?", Date.today - timeframe)
    render json: @data
  end



end
