const users = document.getElementById('users');
const container = document.querySelector('.container');
const userUrl = 'https://jsonplaceholder.typicode.com/users';
const postUrl = 'https://jsonplaceholder.typicode.com/posts?userId=';

async function fetchUsers() {
	return (await fetch(userUrl)).json();
}

async function fetchPosts(userId) {
	return (await fetch(`${postUrl}${userId}`)).json();
}

async function displayUserAndPosts() {
	try {
		const users = await fetchUsers();
		users.forEach(async (user) => {
			const userDiv = document.createElement('div');
			userDiv.classList.add('user');
			userDiv.innerHTML = `
            <h2> ${user.name}</h2>
            <p><strong>Email:</strong> ${user.email}</p>
            <div class="posts"></div>`;
			container.appendChild(userDiv);
			try {
                const posts = await fetchPosts(user.id);
                const postsContainer = userDiv.querySelector(".posts")
				posts.forEach((post) => {
					const postDiv = document.createElement('div');
					postDiv.classList.add('post');
					postDiv.innerHTML = `<strong>${post.title}</strong> <br>${post.body}`;
					postsContainer.appendChild(postDiv);
				});
			} catch {error => console.log(`posts section threw this error: ${error.message}`)}
		});
	} catch {error => console.log(`users section threw this error : ${error.message}`)}
}

displayUserAndPosts();
