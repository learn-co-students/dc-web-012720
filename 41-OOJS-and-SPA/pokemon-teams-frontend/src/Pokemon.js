class Pokemon {

  constructor(pokemonObject){
    this.id = pokemonObject.id
    this.nickname = pokemonObject.nickname
    this.species = pokemonObject.species
    this.trainer_id = pokemonObject.trainer_id
  }

  render(){
    return `
      <li>${this.nickname} (${this.species})
        <button class="release" data-pokemon-id="${this.id}">
          Release
        </button>
      </li>
    `
  }
}
