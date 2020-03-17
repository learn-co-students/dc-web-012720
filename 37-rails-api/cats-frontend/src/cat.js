function fetchCats() {
    fetch("http://localhost:3000/cats")
        .then(r => r.json())
        .then(cats => cats.forEach(cat => renderCat(cat)))
}


function renderCat(cat) {
    let catContainer = document.querySelector("#cats")
    let catDiv = document.createElement("div")
    catContainer.appendChild(catDiv)
    catDiv.classList.add("ui", "card")

    // note this wipes out any event listeners but I just created the card so I know I'm OK
    catDiv.innerHTML = `<div class="image">
    <img src=${cat.image}>
  </div>
  <div class="content">
    <div class="header">${cat.name}</div>
    <div class="description">
        ${cat.name} is a ${cat.breed}.
    </div>
    <div class="extra content">
    </div>
  </div>
  `


}