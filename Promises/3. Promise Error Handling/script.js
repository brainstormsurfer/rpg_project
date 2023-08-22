const usersContainer = document.getElementById('users');
const errorMessage = document.getElementById('error')

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error with getting response')
        }
        return response.json();
    })
    .then(users => {
        users.forEach(user => {
            const userDiv = document.createElement('div')
            userDiv.classList.add('user')
            userDiv.innerHTML = `<h1>${user.name}</h1><p><strong>Email:</strong>${user.email}</p>`;
            usersContainer.appendChild(userDiv);
        });
    })
    .catch(error=> {
        errorMessage.textContent = `An error occurred: ${error.message}. Please try again later. `
    })
