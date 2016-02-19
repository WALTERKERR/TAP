class DataController < ApplicationController

  def index
    p params
    city = params[:city]
    state = params[:state]
    timeframe = params[:timeframe]
    @data = Datum.where(city: city, state: state).where("time >= ?", Date.today - timeframe)
    render json: @data
  end

end
