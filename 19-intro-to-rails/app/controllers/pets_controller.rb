class PetsController < ApplicationController
    
    # get '/pets' do 
    #     @pets = Pet.all
    #     erb :index
    # end

    def index
        @pets = Pet.all
        
    end

    def show 
        @pet = Pet.find(params[:id])
        render 'show'
    end
end
