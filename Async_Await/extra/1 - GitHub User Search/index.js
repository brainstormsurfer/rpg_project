// Step 1: Define the constant for the GitHub API URL
const GITHUB_API_URL = "https://api.github.com/users/";

// Step 2: Grab references to HTML elements
const userDetailContainer = document.getElementById("user-details");
const searchButton = document.getElementById("searchButton");

// Step 3: Declare an asynchronous function fetchUser
async function fetchUser(username) {
  try {
    const response = await fetch(`${GITHUB_API_URL}${username}`);
    const user = await response.json();
    displayUser(user);
  } catch (error) {
    // Handle errors
    console.error("Error fetching user data:", error);
    // Display user-friendly error message in the UI
    userDetailContainer.innerHTML =
      "An error occurred while fetching user data.";
  }
}

// Step 4: Create a displayUser function
function displayUser(user) {
  const userHTML = `
    <div class="card grid-2">
      <div class="all-center">
        <img src="${user.avatar_url}" class="round-img" alt="avatar">
        <h2>${user.name}</h2>
        <p>Location: ${user.location || "Not specified"}</p>
      </div>
      <div class="all-center">
        <h3 class="text-center">Bio</h3>
        <p>${user.bio || "No bio available."}</p>
        <ul>
          <li><strong>Username:</strong> ${user.login}</li>
          <li><strong>Site: </strong><a href="${
            user.blog
          }" target="_blank" rel="noreferrer">${
    user.blog || "No website"
  }</a></li>
        </ul>
        <a href="${
          user.html_url
        }" class="btn btn-success my-1" target="_blank" rel="noreferrer">To Github Profile</a>
      </div>
    </div>
  `;

  userDetailContainer.innerHTML = userHTML;
}

// Step 5: Add an event listener for the search button
searchButton.addEventListener("click", () => {
  const usernameInput = document.getElementById("searchField");
  const username = usernameInput.value.trim(); // Get the entered username
  if (username) {
    fetchUser(username);
  } else {
    // Display error for empty input
    userDetailContainer.innerHTML = "Please enter a valid username.";
  }
});

// Step 6: Fetch the initial user
fetchUser("yourGitHubUsername"); // Replace with an actual GitHub username
