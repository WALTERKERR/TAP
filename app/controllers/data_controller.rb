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

  def find_all
    timeframe = params[:timeframe].to_i
    @all_data = Datum.all.where("time >= ?", Date.today - timeframe)
    render json: @all_data
  end


  def find_city
    # state = params[:state]
    # state = convert_state_abbr(params[:state].upcase) if state.length == 2
    if @coordinate = Coordinate.find_by(city: params[:city], state: params[:state])
      render json: @coordinate
    else
      render json: @coordinate, status: :not_found
    end
  end

  private

  def convert_state_abbr(state)
    states = {"AK" => "Alaska",
      "AL" => "Alabama",
      "AR" => "Arkansas",
      "AZ" => "Arizona",
      "CA" => "California",
      "CO" => "Colorado",
      "CT" => "Connecticut",
      "DE" => "Delaware",
      "FL" => "Florida",
      "GA" => "Georgia",
      "HI" => "Hawaii",
      "IA" => "Iowa",
      "ID" => "Idaho",
      "IL" => "Illinois",
      "IN" => "Indiana",
      "KS" => "Kansas",
      "KY" => "Kentucky",
      "LA" => "Louisiana",
      "MA" => "Massachusetts",
      "MD" => "Maryland",
      "ME" => "Maine",
      "MI" => "Michigan",
      "MN" => "Minnesota",
      "MO" => "Missouri",
      "MS" => "Mississippi",
      "MT" => "Montana",
      "NC" => "North Carolina",
      "ND" => "North Dakota",
      "NE" => "Nebraska",
      "NH" => "New Hampshire",
      "NJ" => "New Jersey",
      "NM" => "New Mexico",
      "NV" => "Nevada",
      "NY" => "New York",
      "OH" => "Ohio",
      "OK" => "Oklahoma",
      "OR" => "Oregon",
      "PA" => "Pennsylvania",
      "RI" => "Rhode Island",
      "SC" => "South Carolina",
      "SD" => "South Dakota",
      "TN" => "Tennessee",
      "TX" => "Texas",
      "UT" => "Utah",
      "VA" => "Virginia",
      "VT" => "Vermont",
      "WA" => "Washington",
      "WI" => "Wisconsin",
      "WV" => "West Virginia",
      "WY" => "Wyoming"}
      return states.values_at(state)[0]
  end

end
