class PagesController < ApplicationController

  def index
  end

  def upload
    render "upload", layout: false
  end

  def parse_upload
    uploaded_io = params[:data]
    file = uploaded_io.read.gsub(/[\\\"]/,"")
    temps = file.scan(/(?<=ObjectTempF\:)(\d+\.\d+)/).flatten
    temps.each do |temperature|
      if temperature.to_f >= 85
        a = Datum.create(temp: temperature.to_f, city: params[:city], state: params[:state], time: params[:date_input][:date])
      end
    end
    redirect_to root_path
  end

  def test
    render 'test'
  end

end
