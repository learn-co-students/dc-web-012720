class ImagesController < ApplicationController
  
  def index
    @images = Image.all
  end

  def new
  end

  def show
  end

  def create
  end
end
