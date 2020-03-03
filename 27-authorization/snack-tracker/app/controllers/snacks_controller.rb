class SnacksController < ApplicationController

    before_action :find_snack, only: [:show, :edit, :update, :destroy]
    before_action :authorized, only: [:new, :create, :edit, :update]
    before_action :admin, only: [:destroy]
    after_action :log_data, only: [:update, :destroy, :create]

    def home 
    end

    def about
        render :about_page
    end

    def index
        if params["bad_for_you"]
            @snacks = Snack.all.select {|snack| snack.high_calorie? }
        else
            @snacks = Snack.all
        end
    end

    def show
        cookies["my_favorite"] = "chocolate chip"
        cookies["last_snack"] = @snack.name
        session["secret_favorite"] = "oatmeal raisin"
    end

    def new
        @snack = Snack.new
    end

    def create
        @snack = Snack.new(snack_params)
        if @snack.valid?
            @snack.save
            redirect_to snack_path(@snack.id)
        else
            render :new
        end
    end

    def edit
    end

    def update
        @snack.update(snack_params)
        redirect_to snack_path(@snack)
    end

    def destroy
        @snack.destroy 
        redirect_to snacks_path
    end

    private

    def find_snack
        @snack = Snack.find(params[:id])

    end

    def log_data
        puts "Some data changed in this way blah blah blah"
    end
    
    def snack_params
        params.require(:snack).permit(:name, :calories, :deliciousness, :retailer_id)
    end
end
