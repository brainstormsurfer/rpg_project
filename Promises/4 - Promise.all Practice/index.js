const url = "https://jsonplaceholder.typicode.com";
const usersUrl = `${url}/users`
const postsUrl = `${url}/posts`;

const postsContainer = document.querySelector('#users')

const usersPromise = fetch(usersUrl)
.then((response) => response.json())
.then((res) => {
    return res
})
.catch(err => {
    displayError(`${err.message}`,'usersPromise')
})

const postsPromise = fetch(postsUrl)
.then(response => response.json())
.then((res) => {
    return res
})
.catch(err => displayError(`${err.message}`, 'postsPromise'))

Promise.all([usersPromise, postsPromise])
.then(([users, posts]) => {
    const usersArr = users
    const userContainer = document.querySelector('#users')    
    usersArr.forEach((user) => {
        const userDiv = document.createElement('div')
        userDiv.classList.add('item')
        userDiv.innerHTML = `<strong>${user.name}</strong><br>${user.email}`;
        userContainer.append(userDiv)
    })
    const postsArr = posts
    const postsContainer = document.querySelector('#posts')
    postsArr.forEach((post) => {
        const postDiv = document.createElement('div')
        postDiv.classList.add('item')
        postDiv.innerHTML = `<strong>${post.title}</strong><br>${post.body}`
        postsContainer.appendChild(postDiv)
    })
})
.catch(err => displayError(`${err.message}`, 'Promise.all'))
function displayError(err, source) {
const errorDiv = document.querySelector('#error')
errorDiv.innerHTML += `${source}: ${err} <br>` 
errorDiv.style.whiteSpace = "pre-line";
}