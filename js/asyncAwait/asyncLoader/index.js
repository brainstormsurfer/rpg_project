const users = document.getElementById('users');
const container = document.querySelector('.container');
const errorMessage = document.querySelector(('.error-message'));
const loader = document.getElementById('loading-indicator');
const userUrl = 'https://jsonplaceholder.typicode.com/users';

async function fetchUsers() {
    loader.style.display = "block";
	try {
		const userData = await fetch(userUrl);
		if (userData.status !== 200) {errorMessage.textContent =`network request was not OK, status :${userData.status}`} 
        else {
            try {const usersData = await userData.json();
                try{
                    usersData.forEach((user) => {
                        const userDiv = document.createElement('div');
                        userDiv.classList.add('user');
                        userDiv.innerHTML = `
                            <h2> ${user.name}</h2>
                            <p><strong>Email:</strong> ${user.email}</p>
                            <div class="posts"></div>`;
                        container.appendChild(userDiv);
                    });}
                    catch {errorMessage.textContent = 'error running over users'}
                }
			catch {errorMessage.textContent = 'response is not JSON type'}
			
		}
	} catch (error) {
		errorMessage.textContent =`this error occurred ${error.message}`;
	}
    loader.style.display = "none";
}

fetchUsers();
