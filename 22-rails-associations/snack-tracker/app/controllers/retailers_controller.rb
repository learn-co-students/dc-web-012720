class RetailersController < ApplicationController
  def index
    @retailers = Retailer.all
  end

  def show
    @retailer = Retailer.find(params[:id])
    @snacks = @retailer.snacks
  end

  def new
    @retailer = Retailer.new
    byebug
    3.times {@retailer.snacks.build}
    puts "don't end yet"
  end

  def create
    @retailer = Retailer.create(retailer_params)
    redirect_to retailer_path(@retailer)
  end

  private

  def retailer_params
    params.require(:retailer).permit(:name, :year_established,
        snacks_attributes: [:name, :calories, :deliciousness])
  end

end
