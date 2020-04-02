class Trainer {
  constructor(trainerObject){
    this.id = trainerObject.id
    this.name = trainerObject.name
    //Problem: this.pokemons is an array of pokemon OBJECTS
    //Goal: this.pokemons is an array of Pokemon INSTANCES
    this.pokemons = trainerObject.pokemons.map(pokemonObject => new Pokemon(pokemonObject))
  }

  render(){
    return `
    <div class="card" data-id="${this.id}"><p>${this.name}</p>
      <button data-trainer-id="${this.id}">Add Pokemon</button>
      <ul>
        ${this.pokemons.map(pokemonInstances => pokemonInstances.render()).join("")}
      </ul>
    </div>
    `
  }
}
