class PagesController < ApplicationController

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
    redirect_to root_path
  end
end
