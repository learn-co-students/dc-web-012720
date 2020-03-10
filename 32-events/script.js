document.addEventListener("DOMContentLoaded", pageSetup)

function pageSetup() {
    document.querySelectorAll(".email").forEach(
        node => node.addEventListener(
            "click", emailClickHandler)
        )
    document.querySelectorAll(".person").forEach(
        node => node.addEventListener(
            "click", rowClickHandler))
    getForm().addEventListener("submit", processFormSubmit)
}

function getForm(){
    return document.querySelector("form")
}

function rowClickHandler(e) {
    let row = e.currentTarget
    let firstName = row.querySelector(".firstName").innerText
    let lastName = row.querySelector(".lastName").innerText
    console.log(`viewing profile of ${firstName} ${lastName}`)
}

function processFormSubmit(event){
    event.preventDefault()
    let firstName = event.target.first.value
    let lastName = event.target.last.value
    let email = event.target.email.value
    addInstructor(firstName, lastName, email)
    event.target.reset()

}

function emailClickHandler(event) {
    console.log(`sending an email to ${event.target.innerText}`)
}

function processClick(event) {
    console.log(event)
    console.log('page is clicked')
}


function getTable(){
    return document.getElementsByTagName('tbody')[0]
}

function addInstructor(firstName, lastName, email) {
    let table = getTable()
    let newRow = makeNewRow(firstName, lastName, email)
    table.appendChild(newRow)
    newRow.querySelector(".email").addEventListener("click", emailClickHandler)

}

function makeNewRow(firstName, lastName, email) {
    let newRow = document.createElement("tr")
    newRow.classList += "person"
    newRow.addEventListener('click', rowClickHandler)
    // tr.id = row
    let firstNameCell = document.createElement("td")
    let lastNameCell = document.createElement("td")
    lastNameCell.className = "lastName"
    let emailCell = document.createElement("td")
    emailCell.className = "email"
    firstNameCell.innerText = firstName
    lastNameCell.innerText = lastName
    emailCell.innerText = email
    newRow.appendChild(firstNameCell)
    newRow.appendChild(lastNameCell)
    newRow.appendChild(emailCell)
    firstNameCell.className = "firstName"
    newRow.id = getNewId()
    return newRow
}

function getNewId() {
    // count how many rows
    let currentRows = getTable().children.length
    // add one
    let newRowId = currentRows + 1
    // format id string
    let idString = `row-${newRowId}`
    return idString
}