"use strict"

console.log(self)

document.addEventListener("DOMContentLoaded", () => {
    console.log('DOM loaded')
    let annButton = document.querySelector('#ann')
    annButton.addEventListener('click', ann.greet)
    let paulButton = document.querySelector('#paul')
    paulButton.addEventListener('click', greet.bind(paul))
})


function greet() {
    debugger
    console.log(`${this.firstName} says hi`)
    function setNewProperty() {
        this.newProperty = "foobar"
    }
    setNewProperty()
}

let paul = {
    firstName: "Paul",
    lastName: "Nicholsen",
    greet: greet
}

let ann = {
    firstName: "Ann",
    lastName: "Duong",
    greet: greet
}

