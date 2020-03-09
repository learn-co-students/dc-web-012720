function addInstructor(firstName, lastName, email) {

	// get table
	let tableBody = getTable()

	// create a table row
	let newRow = createRow(firstName, lastName, email)
	// add the row to the table
	tableBody.appendChild(newRow)
}

function getTable() {
	return document.getElementsByTagName("tbody")[0]
}

function createRow(firstName, lastName, email) {
	let newRow = document.createElement('tr')
	let firstNameTd = document.createElement('td')
	firstNameTd.className = "firstName"
	firstNameTd.innerText = firstName
	newRow.appendChild(firstNameTd)

	let lastNameTd = document.createElement('td')
	newRow.appendChild(lastNameTd)
	lastNameTd.innerText = lastName
	lastNameTd.className = "lastName"

	let emailTd = document.createElement('td')
	emailTd.innerText = email
	email.className = "email"
	newRow.appendChild(emailTd)

	// let fakeTd = document.createElement('td')
	// fakeTd.innerText = "fake"
	// email.className = "fake"
	// newRow.appendChild(fakeTd)
	return newRow

}

function makeRowId() {
	
}