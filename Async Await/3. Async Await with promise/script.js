const usersURL = 'https://jsonplaceholder.typicode.com/users';
const postsURL = 'https://jsonplaceholder.typicode.com/posts';
const usersContainer = document.getElementById('users')
const postsContainer = document.getElementById('posts') 

async function fetchData(url) {
      const response = await fetch(url);
       return response.json();
    } 

    async function displayData(){

        try{
        const [users, posts] = await Promise.all([fetchData(usersURL), fetchData(postsURL)]);
        
        users.forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.className = 'item';
            userDiv.innerHTML = `<h3>${user.name}</h3><p>Email: ${user.email}</p>`;
            usersContainer.appendChild(userDiv);
          });

          posts.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.className = 'item';
            postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
            postsContainer.appendChild(postDiv);
          });

    } catch (error) {
        const errorContainer = document.getElementById('error');
        errorContainer.textContent = `An error occurred: ${error.message}. Please try again later.`;
        console.error('Error:', error);
      }
}
  displayData();