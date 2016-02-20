class DataController < ApplicationController

  def index
    p params
    city = params[:city]
    state = params[:state]
    timeframe = params[:timeframe].to_i
    @data = Datum.where(city: city, state: state).where("time >= ?", Date.today - timeframe)
    p @data
    render json: @data
  end

end
