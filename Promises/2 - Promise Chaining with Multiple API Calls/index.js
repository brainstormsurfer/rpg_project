const usersUrl = "https://jsonplaceholder.typicode.com";

fetch(`${usersUrl}/users`)
  .then((response) => response.json())
  .then((data) => {
    const usersDiv = document.getElementById("users");
    for (let user of data) {
      const userDiv = document.createElement("div");
      userDiv.classList.add("user");
      userDiv.innerHTML = `
        <h2>${user.name}</h2>
        <p><strong>Email</strong> ${user.email}</p>
        <div class="posts"></div></div>
        `;
      usersDiv.appendChild(userDiv);

      fetch(`${usersUrl}/posts?userId=${user.id}`)
        .then((response) => response.json())
        .then((results) => {
          const postsDiv = userDiv.querySelector(".posts");
          postsDiv.innerHTML = "<h3>Posts:</h3>";
          for (let post of results) {
            const postEl = document.createElement("div");
            postEl.classList.add("post");
            postEl.innerHTML = `<strong>${post.title}</strong><br>${post.body}`;
            postsDiv.appendChild(postEl);
          }
        })
        .catch((err) => console.error(err));
    }
  })
  .catch((err) => console.error(err));
