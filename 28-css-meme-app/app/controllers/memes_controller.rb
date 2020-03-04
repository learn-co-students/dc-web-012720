class MemesController < ApplicationController
  def index
    @memes = Meme.all
  end

  def show
    @meme = Meme.find(params[:id])
  end

  def new
    if session[:user_id]
      @meme = Meme.new
      @user_id = session[:user_id]
    else 
      redirect_to "/login"
    end
  end

  def create
    @meme = Meme.new(memes_params)
    if @meme.valid?
      @meme.save
      redirect_to meme_path(@meme)
    else
      render :new
    end
  end

  def memes_params
    params.require(:meme).permit(:name, :input1, :input2, :image_id, :user_id)
  end
end
