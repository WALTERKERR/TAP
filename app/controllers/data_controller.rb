class DataController < ApplicationController
  skip_before_action  :verify_authenticity_token, only: [:unicorn]

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
    results = Google::Search::News.new do |search|
      search.query = city + state + "Health"
      search.size = :small
    end
    @data << results.first(2)
    render json: @data
  end

  def find_all
    timeframe = params[:timeframe].to_i
    @all_data = Datum.all.where("time >= ?", Date.today - timeframe)
    render json: @all_data
  end


  def find_city
    if @coordinate = Coordinate.find_by(city: params[:city], state: params[:state])
      render json: @coordinate
    else
      render json: @coordinate, status: :not_found
    end
  end

  def unicorn
    unless params.keys.first == 'message'
      input_string = params.keys.first
      cleaned_string = input_string.split.join

      obj_temp = cleaned_string.scan(/(?<=ObjectTemp\:)(\d+\.\d+)/)[0][0]
      puts "Obj Temp: #{obj_temp}"

      if obj_temp.to_f > 92.5
        puts "***STORING DATA***"
        mq2_value = cleaned_string.scan(/(?<=MQ-2Value\:)(\d+)/)[0][0]
        puts "MQ2 Value: #{mq2_value}"
        amb_temp = cleaned_string.scan(/(?<=AmbientTemp\:)(\d+\.\d+)/)[0][0]
        puts "Amb Temp: #{amb_temp}"
        humidity = cleaned_string.scan(/(?<=Humidity\:)(\d+\.\d+)/)[0][0]
        puts "Humidity: #{humidity.to_f}"
        city = cleaned_string.scan(/(?<=City\:).+(?=State)/)[0].gsub(/(?<=[a-z])(?=[A-Z])/, ' ')
        puts "City: #{city}"
        state = cleaned_string.scan(/(?<=State\:).+(?=[Z])/)[0].gsub(/(?<=[a-z])(?=[A-Z])/, ' ')
        puts "State: #{state}"

        a = Datum.create(time: Time.now, temp: obj_temp.to_f, city: city, state: state, humidity: humidity.to_f, ambient_temp: amb_temp.to_f, mq2: mq2_value.to_f )
      end
    end

  end
end
