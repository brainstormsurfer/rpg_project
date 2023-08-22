const userURL = 'https://jsonplaceholder.typicode.com/users';
const loadingIndicator = document.getElementById('loading-indicator');
const usersContainer = document.getElementById('users');
loadingIndicator.style.display = 'block';

fetch(userURL)
.then(response => {
    if(!response.ok){
        throw new Error(`Error has occurred while getting a response.`)
    }
    return response.json();
})
.then(users=> {
    users.forEach(user => {
        const userDiv = document.createElement('div')
        userDiv.classList.add('item')
        userDiv.innerHTML = `<strong>${user.name}</strong><br>${user.email}`;
        usersContainer.appendChild(userDiv);
        loadingIndicator.style.display = 'none';
})
})
.catch(error=> {
    loadingIndicator.style.display = 'none';
    console.error('Error:', error);
    const errorMessage = document.createElement('p');
    errorMessage.style.color = 'red';
    errorMessage.textContent = 'An error occurred while fetching user data.';
    usersContainer.appendChild(errorMessage)
})