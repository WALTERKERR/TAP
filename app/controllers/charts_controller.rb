class ChartsController < ApplicationController

  def index
    render "pages/chart", layout: false
  end
end
