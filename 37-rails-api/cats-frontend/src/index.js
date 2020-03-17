document.addEventListener('DOMContentLoaded', function(){
  fetchHobbies()
  fetchCats()
  document.getElementsByTagName('form')[0].addEventListener('submit', processForm)
})
