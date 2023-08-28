const GITHUB_API_URL = 'https://api.github.com/users/';

const userDetailContainer = document.getElementById('user-details');
const searchButton = document.getElementById('searchButton');

async function fetchUser(username) {
    try {
        const response = await fetch(GITHUB_API_URL);
        const user = await response.json()
        displayUser(user);
    } 
    catch (error){
        console.error('Error:', error);
    }
}

function displayUser(user){
    const userHTML = `
    <div class="card grid-2">
  <div class="all-center"><img src="https://avatars.githubusercontent.com/u/26270008?v=4" class="round-img"
      alt="avatar">
    <h2>Ori Baram</h2>
    <p>Location: Ra'anana, Israel</p>
  </div>
  <div class="all-center">
    <h3 class="text-center">Bio</h3>
    <p>Currently, I am a lecturer of a full-stack bootcamp at Appleseeds. Before that, I worked as a Front End Developer
      at Kemtai start-up.</p>
    <ul>
      <li><strong>Username:</strong> obrm</li>
      <li></li>
      <li><strong>Site: </strong><a href="https://ori-baram.dev" target="_blank"
          rel="noreferrer">https://ori-baram.dev</a></li>
      <li></li>
    </ul><a href="https://github.com/obrm" class="btn btn-success my-1" target="_blank" rel="noreferrer">To
      Github Profile</a>
  </div>
</div>
<div class="card text-center">
  <div class="badge badge-dark">Followers: 67</div>
  <div class="badge badge-success">Following: 6</div>
  <div class="badge badge-info">Public Repositories: 96</div>
  <div class="badge badge-light">Public Gists: 0</div>
</div>`;

userDetailContainer.innerHTML = userHTML;
}

searchButton.addEventListener('click', async () => {
    const username = document.getElementById('username').value;
    if (username) {
        try {
            const user = await fetchUser(username);
            displayUser(user);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }
});