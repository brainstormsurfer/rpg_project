const GITHUB_API_URL = 'https://api.github.com/users/';

const userDetailContainer = document.getElementById('user-details');
const searchButton = document.getElementById('searchButton');

async function fetchUser(username) {
    try {
        const response = await fetch(`${GITHUB_API_URL}${username}`);
        const user = await response.json()
        console.log(user);
        displayUser(user);
    } 
    catch (error){
        console.error('Error:', error);
    }
}

function displayUser(user){
    const userHTML = `
    <div class="card grid-2">
  <div class="all-center">
  ${user.avatar_url ? `<img src=${user.avatar_url} class="round-img"
      alt="avatar">`:''}
    <h2>${user.name}</h2>
    ${user.location ? `<p>Location: ${user.location}</p>` : ''}
  </div>
  <div class="all-center">
    <h3 class="text-center">Bio</h3>
    ${user.bio ? `<p>${user.bio}</p>` : '- - - -'}
    <ul>
      ${user.login ? `<li><strong>Username:</strong> ${user.login}</li>` : ''}
      <li></li>
      <li><strong>Site: ${user.blog ? `</strong><a href="" target="_blank"
          rel=""></a></li>` : '- - - -'}
      <li></li>
    </ul>${user.html_url ? `<a href=${user.html_url} class="btn btn-success my-1" target="_blank" rel="noreferrer"`: '- - - -'}>To
      Github Profile</a>
  </div>
</div>
<div class="card text-center">
  <div class="badge badge-dark">Followers: ${user.followers} </div>
  <div class="badge badge-success">Following: ${user.following}</div>
  <div class="badge badge-info">Public Repositories: ${user.public_repos}</div>
  <div class="badge badge-light">Public Gists: ${user.public_gists}</div>
</div>`;

userDetailContainer.innerHTML = userHTML;
}

searchButton.addEventListener('click', async () => {
    const username = document.getElementById('searchField').value;
    if (username) {
        try {
            const user = await fetchUser(username);
            displayUser(user);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    }
});

fetchUser('DanielYehezkely');