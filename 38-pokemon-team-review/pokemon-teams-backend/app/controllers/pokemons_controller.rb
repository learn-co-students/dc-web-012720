class PokemonsController < ApplicationController
  
  def create
    trainerId = params["trainer_id"]

    trainer = Trainer.find(trainerId)
  

    if trainer.pokemons.length < 6
      name = Faker::Name.first_name
      species = Faker::Games::Pokemon.name
      pokemon = Pokemon.create(nickname: name , species: species , trainer_id: trainerId)
      render json: pokemon
    else 
      render json: {
        message: "Bad request"
      }, status: 200
    end
  end

  def destroy 
    pokemon = Pokemon.find_by(id: params["id"])
    pokemon.delete
  end

end
