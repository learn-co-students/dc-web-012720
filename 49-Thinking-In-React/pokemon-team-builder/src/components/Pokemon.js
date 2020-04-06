import React from 'react'

const Pokemon = (props) => {
  return (
    <div
      onDoubleClick={() => props.genericAction(props.pokemonObj)}
      onClick={() => props.clickMe(props.pokemonObj)}
      className="pokemon card">{props.pokemonObj.name}
    </div>
  )
}

export default Pokemon
