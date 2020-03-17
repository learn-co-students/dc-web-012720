class CatsController < ApplicationController

    def index 
        cats = Cat.all 

        # serialized data
        render json: cats.to_json(
            :except => [:created_at, :updated_at],
            :include => {:hobbies => 
                {:except => [:created_at, :updated_at]}})
    end

    def create
        cat = Cat.create(cat_params)
        render json: cat
    end

    private

    def cat_params
        params.require(:cat).permit(:name, :breed, :image)
    end
end
