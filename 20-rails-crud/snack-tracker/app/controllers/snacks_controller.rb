class SnacksController < ApplicationController

    def home 
    end

    def index
        @snacks = Snack.all
    end

    def show
        @snack = Snack.find(params[:id])
        puts "Hello"
    end
end
