const url = "https://jsonplaceholder.typicode.com";

const divContainer = document.querySelector('.container')
const divLoader = document.querySelector('#loading-indicator')
const divSection = document.querySelector('.section')

divLoader.style.display = 'block'
fetch(`${url}/users`)
.then(response => response.json())
.then(data => {
const users = data
users.forEach(user => {
const userDiv = document.createElement('div')
userDiv.classList.add('item')
userDiv.innerHTML = `<strong>${user.name}</strong><br>${user.email}`
divSection.appendChild(userDiv)
})    
divLoader.style.display = 'none'
})
.catch(err => {
    const divError = document.createElement('div')    
    divSection.appendChild(divError)
    divError.style.fontSize = "20px"
    divError.style.color = "red"    
    divError.innerHTML = `<strong>${err.name}:</strong><br>${err.message}` 
    divLoader.style.display = 'none'    
})