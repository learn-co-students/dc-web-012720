const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener("DOMContentLoaded", () => {
  fetchTrainers()
})


function fetchTrainers() {
  fetch(TRAINERS_URL)
    .then(response => response.json())
    .then(trainersArray => {
      trainersArray.forEach(trainerObj => renderTrainer(trainerObj))
    })
}


{/* <div class="card" data-id="1"><p>Prince</p>
  <button data-trainer-id="1">Add Pokemon</button>
  <ul>
    <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
    <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
    <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
    <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
    <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
  </ul>
</div> */}

function renderTrainer(trainerObj) {
  
  // create div
  let div = document.createElement('div')
  div.classList.add("card")
  div.dataset.id = trainerObj.id

  // create p
  let p = document.createElement("p")
  p.innerText = trainerObj.name

  // create button
  let btn = document.createElement('button')
  btn.dataset.trainerId = trainerObj.id
  btn.innerHTML = "Add Pokemon"
  btn.addEventListener('click', addPokemon)

  // create ul 
  let ul = document.createElement('ul')

  trainerObj.pokemons.forEach(pokemonObj => {
    let li = renderPokemon(pokemonObj, ul)
   

  })

  div.append(p, btn, ul)

  // let main = document.getElementById("main-body")

  getMain().appendChild(div)

}

function addPokemon(event) {

  let trainerId = event.currentTarget.dataset.trainerId

  let ul = event.currentTarget.parentElement.querySelector("ul")


  fetch(POKEMONS_URL, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      trainer_id: trainerId
    })
  })
  .then(response => {
    if(response.status === 200) {
      return response.json()
    }
  })
  .then(pokemonObj => {
    renderPokemon(pokemonObj, ul)
  })
  .catch(error => {
    alert("Trainer can't have more than 6 pokemons")
  })
}


// <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
  
  function renderPokemon(pokemonObj, ul) {
    
    // create li
    let li = document.createElement('li')
    li.innerText = `${pokemonObj.nickname} (${pokemonObj.species})`

    // create button
    let btn = document.createElement('button')
    btn.classList.add('release')
    btn.dataset.pokemonId = pokemonObj.id
    btn.innerText = "Release"
    btn.addEventListener('click', removePokemon)

    li.appendChild(btn)

    ul.appendChild(li)
  
  }

  function removePokemon(event) {
    let pokemonId = event.currentTarget.dataset.pokemonId
    let li = event.currentTarget.parentElement

    fetch(`${POKEMONS_URL}/${pokemonId}`, {
      method: "DELETE"
    })
    // .then(response => {
    //   li.remove()
    // })

    li.remove()

  }

  function getMain() {
    let main = document.getElementById("main-body")
    return main
  }



  
