class PagesController < ApplicationController
  skip_before_action  :verify_authenticity_token, only: [:unicorn]

  def index
  end

  def upload
    if request.xhr?
      render "_upload", layout: false
    else
      render "_upload"
    end
  end

  def parse_upload
    uploaded_io = params[:data]
    file = uploaded_io.tempfile.open
    parsed = CSV.parse(file)
    parsed.each do |data|
      a = Datum.create(temp: data[0], humidity: data[1], ambient_temp: data[2], city: params[:city], state: params[:state], time: params[:date_input][:date])
    end
    # file = uploaded_io.read.gsub(/[\\\"]/,"")
    # temps = file.scan(/(?<=ObjectTempF\:)(\d+\.\d+)/).flatten
    # temps.each do |temperature|
    #   if temperature.to_f >= 85
    #     a = Datum.create(temp: temperature.to_f, city: params[:city], state: params[:state], time: params[:date_input][:date])
    #   end
    # end
    redirect_to root_path
  end

  def test
    render 'test'
  end

  def unicorn
    unless params.keys.first == 'message'
      input_string = params.keys.first
      cleaned_string = input_string.split.join

      obj_temp = cleaned_string.scan(/(?<=ObjectTemp\:)(\d+\.\d+)/)[0][0]
      puts "Obj Temp: #{obj_temp}"

      if obj_temp.to_f > 85
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
