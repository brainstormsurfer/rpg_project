const usersURL = 'https://jsonplaceholder.typicode.com/users';
const loadingIndicator = document.getElementById('loading-indicator');
const usersContainer = document.getElementById('users');

async function fetchUsers(){
    loadingIndicator.style.display = 'block'
    try {
        const response = await fetch(usersURL)
        if(!response.ok){
            throw new Error('Error has Occurred during await response ')
        }
        const usersData = await response.json()
        usersData.forEach(user => {
            const userDiv = document.createElement('div')
                userDiv.classList.add('user')
                userDiv.innerHTML = `<h1>${user.name}</h1><p><strong>Email:</strong>${user.email}</p>`;
                usersContainer.appendChild(userDiv);
        });
    } catch (error){
        console.error('Error:', error);
    const errorMessage = document.createElement('p');
    errorMessage.style.color = 'red';
    errorMessage.textContent = 'An error occurred while fetching user data.';
    usersContainer.appendChild(errorMessage)
    } finally {
        loadingIndicator.style.display = 'none'
    }
}
fetchUsers()