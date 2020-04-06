import React from 'react'
import Pokemon from '../components/Pokemon'

const PokemonContainer = (props) => {
  //gets props
  //does the thins with those props
  // console.log("Inside PokemonContainer!!", props)
  return (
    <div>
      <h3>{props.label}:</h3>
      {props.pokemonToDisplay.map(pokemon => <Pokemon
        pokemonObj={pokemon}
        key={pokemon.name}
        clickMe={props.changeDetailsPokemon}
        genericAction={props.genericAction}
      />)}
    </div>
  )
}

export default PokemonContainer
