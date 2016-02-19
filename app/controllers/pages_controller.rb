class PagesController < ApplicationController

  def index
    @key = ENV['MAPBOX_KEY']
  end
end
