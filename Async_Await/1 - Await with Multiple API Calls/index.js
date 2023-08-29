async function fetchUsers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    if (!response)
    throw new Error('Users fetching failed')
    const data = await response.json()
    if (!data)
    throw new Error('json users response failed')
    return data
}

async function fetchPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    if (!response)
    throw new Error('Posts fetching failed')
    const data = await response.json()
    return data
}

async function displayUserAndPosts() {        
    const usersDiv = document.querySelector('#users');
    try {
    const users = await fetchUsers()
    const posts = await fetchPosts()
    console.log(users)
    console.log(posts)
    users.forEach((user, i) => {
        const userDiv = document.createElement("div");
        userDiv.classList.add("user");
        userDiv.innerHTML = `
          <h2>${user.name}</h2>
          <p><strong>Email</strong> ${user.email}</p>
          <div class="posts"></div></div>
          `;
          usersDiv.appendChild(userDiv);
         const postsDiv = document.createElement('div')
         postsDiv.textContent = "POSTS"
         postsDiv.classList.add('posts')                         
            posts.forEach((post) =>  {                    
            if (i+1 === post.userId) {
            const postEl = document.createElement("div");
            postEl.classList.add("post");
            postEl.innerHTML = `<strong>${post.title}</strong><br>${post.body}`;
            postsDiv.appendChild(postEl);
            userDiv.appendChild(postsDiv)
            } 
        })
    })
    
    } catch(err) {
        console.error(err)
    }
}

displayUserAndPosts()