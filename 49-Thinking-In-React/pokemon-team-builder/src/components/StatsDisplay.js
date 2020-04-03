import React from 'react'

const StatsDisplay = (props) => {
  return (
    <div className="card details">
      <div>
        <div className="row">{props.pokemon.name.toUpperCase()}</div>
        <div className="row">
          <div><img alt={props.pokemon.name} src={props.pokemon.sprites.back_default} /></div>
          <div><img alt={props.pokemon.name} src={props.pokemon.sprites.front_shiny} /></div>
          <div><img alt={props.pokemon.name} src={props.pokemon.sprites.back_shiny} /></div>
        {props.pokemon.stats.map(stat => (
          <div key={stat.stat.name} className="block">{stat.stat.name}: {stat.base_stat}</div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default StatsDisplay
