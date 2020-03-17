function fetchHobbies() {
    fetch("http://localhost:3000/hobbies")
        .then(r => r.json())
        .then(hobbies => hobbies.forEach(hobby => renderHobby(hobby)))
}

function renderHobby(hobby) {
    let hobbyList = document.getElementById('hobbies')

    let hobbyLi = document.createElement("li") 
    hobbyLi.innerText = `${hobby.name}: ${hobby.description}`
    hobbyList.appendChild(hobbyLi)
}