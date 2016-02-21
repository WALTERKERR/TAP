class PagesController < ApplicationController

  def index
  end

  def upload
    render "upload", layout: false
  end

  def parse_upload
    uploaded_io = params[:tempdata]
    p file = uploaded_io.read.gsub(/[\\\"]/,"")
    p temps = file.scan(/(?<=ObjectTempF\:)(\d+\.\d+)/).flatten
    temps.each do |temperature|

      if temperature.to_f >= 85
        a = Datum.create(temp: temperature.to_f, city: params[:city], state: params[:state], time: params[:tempdate][:date])
      end
    end
    redirect_to root_path
  end

end
