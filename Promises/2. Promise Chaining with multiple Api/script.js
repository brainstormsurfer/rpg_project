const usersContainer = document.getElementById('users');


fetch('https://jsonplaceholder.typicode.com/users')
.then(response => {
    if(!response.ok){
        throw new Error('Response is clearly not ok');
    }
     return response.json();
})
.then(users => {
    users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `   <h2>${user.name}</h2>   <p><strong>Email:</strong> ${user.email}</p>   <div class="posts"></div>`;
        usersContainer.appendChild(userDiv);
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
        .then(response => {
           return response.json()
        })
        .then(posts => {
            const postsContainer = userDiv.querySelector('.posts');
            const postHeader = document.createElement('h3')
            postHeader.textContent = 'Posts'
            postsContainer.appendChild(postHeader); 
            posts.forEach(post => {
                const postDiv = document.createElement('div')
                postDiv.classList.add('post')
                postDiv.innerHTML = `<strong>${post.title}</strong><br>${post.body}`
                postsContainer.appendChild(postDiv);
            })
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
        })
    })
})
.catch(error => {
    console.error('Error fetching users:', error);
  });



