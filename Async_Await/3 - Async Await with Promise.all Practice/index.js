const url = "https://jsonplaceholder.typicode.com";
const usersUrl = `${url}/users`;
const postsUrl = `${url}/posts`;

async function fetchUsers() {
  try {
    let response = await fetch(usersUrl);
    if (!response.ok)
    throw new Error(
  `Networking issue while fetching users, ${response.status}`
  );
  const usersPromise = await response.json();

  response = await fetch(postsUrl);
  if (!response.ok)
  throw new Error(
`Networking issue while fetching posts, ${response.status}`
);
const postsPromise = await response.json();
console.log()
      return ([usersPromise, postsPromise])

  } catch (err) {
    displayError(`${err.message}`);
  }
}


async function displayData() {
  try {
    const [usersPromise, postsPromise] = await fetchUsers()
    const [users, posts] = await Promise.all([usersPromise, postsPromise]);
    console.log(users)
    const usersArr = users;
    const userContainer = document.querySelector("#users");
    usersArr.forEach((user) => {
      const userDiv = document.createElement("div");
      userDiv.classList.add("item");
      userDiv.innerHTML = `<strong>${user.name}</strong><br>${user.email}`;
      userContainer.append(userDiv);
    });
    const postsArr = posts;
    const postsContainer = document.querySelector("#posts");
    postsArr.forEach((post) => {
      const postDiv = document.createElement("div");
      postDiv.classList.add("item");
      postDiv.innerHTML = `<strong>${post.title}</strong><br>${post.body}`;
      postsContainer.appendChild(postDiv);
    });
  } catch (err) {
    displayError(`${err.message}`);
  }
}

function displayError(err, source) {
  const errorDiv = document.querySelector("#error");
  errorDiv.innerHTML += `${source}: ${err} <br>`;
  errorDiv.style.whiteSpace = "pre-line";
}

displayData()