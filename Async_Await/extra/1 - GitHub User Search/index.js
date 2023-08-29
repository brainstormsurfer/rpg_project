const GITHUB_API_URL = "https://api.github.com/users/";
const userDetailContainer = document.getElementById("user-details");
const searchButton = document.getElementById("searchButton");
const searchInput = document.querySelector("#searchField");

async function fetchUser(username) {
  if (!username) {
    console.log("Please enter a Github username:");
  }
  try {
    const response = await fetch(`${GITHUB_API_URL}${username}`);
    const user = await response.json();
    console.log(user);
    displayUser(user);
  } catch (err) {
    console.error(err);
  }
}
function displayUser(user) {
  userDetailContainer.innerHTML = '';

  if (user.name) {
  const userHTML = `
  <div class="card grid-2">
  <div class="all-center"><img src=${user.avatar_url} class="round-img"
      alt="avatar">
    <h2>${user.name}</h2>
    <p>Location: ${user.location}</p>
  </div>
  <div class="all-center">
    <h3 class="text-center">Bio</h3>
    <p>${user.bio}</p>
    <ul>
      <li><strong>Username:</strong>${user.login}</li>
      <li></li>
      <li><strong>Site: </strong><a href="${user.blog}" target="_blank"
          rel="noreferrer">https://ori-baram.dev</a></li>
      <li></li>
    </ul><a href=${user.html_url} class="btn btn-success my-1" target="_blank" rel="noreferrer">To
      Github Profile</a>
  </div>
</div>
<div class="card text-center">
  <div class="badge badge-dark">Followers: ${user.followers}</div>
  <div class="badge badge-success">Following: ${user.following}</div>
  <div class="badge badge-info">Public Repositories: ${user.public_repos}</div>
  <div class="badge badge-light">Public Gists: ${user.public_gists}</div>
</div>
  `;
    userDetailContainer.innerHTML = userHTML;
} else {
  throw Error('User not found!')
}
}

const originBtnColor = getComputedStyle(searchButton).backgroundColor;
searchButton.addEventListener("click", (e) => {
  const inputUsername = searchInput.value;
  if (inputUsername) {
    fetchUser(inputUsername);
  } else {
    alert("Please enter a Github username");
  }
});

searchButton.addEventListener("mousedown", () => {
  searchButton.style.backgroundColor = "orange";
});

searchButton.addEventListener("mouseup", () => {
  searchButton.style.backgroundColor = originBtnColor;
});

searchInput.addEventListener("keypress", (e) => {
  const inputUsername = searchInput.value;
  if (e.key === "Enter") {
    if (inputUsername)
    fetchUser(inputUsername);
   else
    alert("Please enter a Github username");
  }
});
