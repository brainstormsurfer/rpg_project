const usersContainer = document.getElementById('users')
const baseURL = 'https://jsonplaceholder.typicode.com';

async function fetchUsers() {
    const response = await fetch(`${baseURL}/users`);
    return response.json();
};

async function fetchPosts(userId) {
    const response = await fetch(`${baseURL}/posts?userId=${userId}`);
    return response.json();
}

async function displayUserAndPosts() {
    try {
        const usersData = await fetchUsers();

        usersData.forEach(async user => {
            const userContainer = document.createElement('div');
            userContainer.classList.add('user');
            userContainer.innerHTML = `
                <h2>${user.name}</h2>
                <p>Email: ${user.email}</p>
                <div class="posts"></div>
            `;
            usersContainer.appendChild(userContainer);

            try {
                const postsData = await fetchPosts(user.id);
                const postsContainer = userContainer.querySelector('.posts');
                postsData.forEach(post => {
                    const postContainer = document.createElement('div');
                    postContainer.classList.add('post');
                    postContainer.innerHTML = `
                        <strong>${post.title}</strong><br>
                        ${post.body}
                    `;
                    postsContainer.appendChild(postContainer);
                });
            } catch (postsError) {
                console.error('Error fetching posts:', postsError);
            }
        });
        
    } catch (usersError) {
        console.error('Error fetching users:', usersError);
    }
}

displayUserAndPosts();

