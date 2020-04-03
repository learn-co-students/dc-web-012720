import React, { Component } from 'react';
import '../App.css';
import PokemonContainer from './PokemonContainer'
import StatsDisplay from '../components/StatsDisplay'

class App extends Component {
  constructor(){
    super()
    this.state = {
      detailsPokemon: null, //null is a falsey value
      team: [],
      allPokemon: []
    }
  }

  //we can only update allPokemon in this class
  componentDidMount(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(res => res.json())
    .then(data => {
      // console.log(data.results)
      this.setState( {allPokemon: data.results} )
    })
  }

  //state changing callback to update detailsPokemon
  changeDetailsPokemon = (data) => {
    fetch(data.url)
    .then(res => res.json())
    .then(json => {
      this.setState({detailsPokemon: json})
    })
  }

  addPokemonToTeam = (pokemon) => {
    //pokemon is the pokemon that was double cliked to be added to team
    //if a dupe was added
    if( this.state.team.includes(pokemon) ){
      alert("Error: Cannot add the same pokemon twice")
    }else if( this.state.team.length >= 6 ){     //if trainer already has 6 pokemon
      alert("Error: Cannot have more than 6 pokemon")
    }else{
      this.setState({team: [...this.state.team, pokemon] })
    }
  }

  removePokemonFromTeam = (pokemon) => {
    console.log("attempting to remove:", pokemon)
    //slice and splice to remove pokemon
    //filter out the pokemon
    let newTeam = this.state.team.filter(currentMon => currentMon.name !== pokemon.name)
    this.setState({team: newTeam}) //cause react to update and re-render
  }

  //this.state.allPokemon = the OG list of 151 in order!!!
  getNonTeamPokemon(){
    //derived all the pokemon but remove pokemon that are in the team
    return this.state.allPokemon.filter(pokemon => !this.state.team.includes(pokemon))
  }

  render() {
    return (
      <div className="App">
        <img alt="Pokemon" width="200" src="https://d33wubrfki0l68.cloudfront.net/42936b3e4d03c9b7c5927e3752a36cef7ff8bdf0/53627/images/pokemon.png"/>
        <PokemonContainer
          label="Team"
          pokemonToDisplay={this.state.team}
          changeDetailsPokemon={this.changeDetailsPokemon}
          genericAction={this.removePokemonFromTeam}
        />

        {this.state.detailsPokemon ? <StatsDisplay pokemon={this.state.detailsPokemon}/> : null}

        <PokemonContainer
          label="Wild Pokemon"
          pokemonToDisplay={this.getNonTeamPokemon()}
          changeDetailsPokemon={this.changeDetailsPokemon}
          genericAction={this.addPokemonToTeam}
        />
      </div>
    );
  }
}

export default App;
