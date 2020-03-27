const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener("DOMContentLoaded", () => {
  //on load of the page, make an instance of App
  console.log("dom loaded")
  fetch(TRAINERS_URL)
  .then(res => res.json())
  .then(trainers => {
    console.log(trainers)
    application = new App(trainers)
    body = document.querySelector("body")
    body.innerHTML = application.render()

    //add event listeners here

  })
})
