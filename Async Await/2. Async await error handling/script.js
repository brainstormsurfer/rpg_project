const usersContainer = document.getElementById('users');
const errorMessage = document.getElementById('error')
const usersURL = 'https://jsonplaceholder.typicode.com/users'

async function fetchUsers(){
    try {
    const response = await fetch(usersURL);
    if(!response.ok){
        throw new Error('Network response was not ok')
    } 
    const usersData = await response.json();
    usersData.forEach(user => {
        const userDiv = document.createElement('div')
            userDiv.classList.add('user')
            userDiv.innerHTML = `<h1>${user.name}</h1><p><strong>Email:</strong>${user.email}</p>`;
            usersContainer.appendChild(userDiv);
    });
} catch (error) {
    errorMessage.textContent = `Error has occurred: ${error.message}`
}
};
fetchUsers();