document.addEventListener("DOMContentLoaded", () => {
  gottaFetchEmAll()
  let form = document.getElementById('create-pokemon')
  form.addEventListener('submit', processCreateForm)
});

function gottaFetchEmAll(){
    // retrieves all Pokemon from server and renders them to the page
    console.log('fetch called')
    fetch("http://localhost:3000/pokemon")
        .then(res => res.json())
        .then(pokemonArray => pokemonArray.forEach(pokemon => renderPokemon(pokemon)))
}


function renderPokemon(pokemon) {
    let container = document.getElementById("pokemon-container")

    let pokemonCard = document.createElement('div')
    pokemonCard.dataset.id = pokemon.id
    pokemonCard.classList.add('card')
    let header = document.createElement('h3')
    header.innerText = pokemon.name

    container.appendChild(pokemonCard)
    pokemonCard.appendChild(header)

    let pokemonImage = document.createElement('img')
    pokemonImage.src = pokemon.sprite

    pokemonCard.appendChild(pokemonImage)
    pokemonCard.addEventListener('click', deletePokemon)

}

function processCreateForm(event){
    event.preventDefault()
    let name = event.target.name.value
    let sprite = event.target.sprite.value
    let payload = {name: name, sprite: sprite}
    let stringifiedPayload = JSON.stringify(payload)

    fetch("http://localhost:3000/pokemon", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: stringifiedPayload
    }).then(res => res.json())
    .then(pokemon => renderPokemon(pokemon))
    event.target.reset()
}

function deletePokemon(event) {
    let pokemonId = event.currentTarget.dataset.id
    debugger
    fetch(`http://localhost:3000/pokemon/${pokemonId}`, {
        method: "DELETE"
    })
    event.currentTarget.remove()
}