class PagesController < ApplicationController

  def index
  end

  def upload
    render "upload", layout: false
  end

  def parse_upload
    uploaded_io = params[:tempdata]
    obj = JSON.parse(uploaded_io.read)
    obj.each_value do |data|
      if data[3]["ObjectTempF"].to_f >= 85
        a = Datum.create(temp: data[3]["ObjectTempF"].to_f, city: params[:city], state: params[:state], time: params[:tempdate][:date])
      end
    end
    redirect_to upload_path
  end

end
