document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('load-animals').addEventListener("click", fetchAnimals)
})

function fetchAnimals() {
    console.log('clicked')
    fetch(getAnimalFarmURL())
        .then(response => response.json())
        .then(animals => 
            animals.forEach(animal => renderAnimal(animal)))
}

function getAnimalFarmURL() {
    return "https://animal-farm-api.herokuapp.com/animals"
}

function renderAnimal(animal) {

    let animalCard = document.createElement('div')
    animalCard.classList += 'card'
    let animalName = document.createElement('h1')
    animalName.innerText = animal.name 

    let animalSpecies = document.createElement('div')
    animalSpecies.innerText = animal.species 

    let animalPic = document.createElement('img')
    animalPic.src = animal.img 
    animalPic.style.height = "120px"

    animalCard.append(animalName, animalSpecies, animalPic)

    animalContainer().append(animalCard)

}

function animalContainer() {
    return document.getElementsByClassName('container')[0]
}