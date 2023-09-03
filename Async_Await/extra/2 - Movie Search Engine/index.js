// Step 1: Define Constants for OMDB API URL
const OMDB_URL = "https://www.omdbapi.com/?apikey=9e3a28ec"; // Replace YOUR_API_KEY with your actual API key

// Step 2: Grab References to HTML Elements
const searchButton = document.getElementById("searchButton");
const searchInput = document.getElementById("searchInput");
const movieContainer = document.getElementById("movieContainer");

// Step 3: Attach Event Listener for Search Button
searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value;
  if (searchTerm) {
    searchMovie(searchTerm);
    searchInput.value = ""; // Clear the search input
  } else {
    displayErrorMessage("Please enter a movie title."); // Challenge 1: Enhanced Error Handling
  }
});

// Step 4: Define an Asynchronous Function searchMovie
async function searchMovie(title) {
  try {
    // Fetch Data
    const response = await fetch(`${OMDB_URL}&t=${title}`);
    const data = await response.json();
    const template = `
<div class="movie-content">
  <img src="${data.Poster}" alt="shadiddd" class="poster">
  <div class="movie-details">
    <h1>${data.Title}</h1>
    <p>${data.Plot}</p>
    <div class="info">
      <div class="info-label">Genre:</div>
      <div>${data.Genre}</div>
    </div>
    <div class="info">
      <div class="info-label">Year:</div>
      <div>${data.Year}</div>
    </div>
    <div class="info">
      <div class="info-label">Director:</div>
      <div>${data.Director}</div>
    </div>
    <div class="info">
      <div class="info-label">Actors:</div>
      <div>${data.Actors}</div>
    </div>
    <div class="info">
      <div class="info-label">Ratings:</div>
      <div id="movieRatings">
      </div>
    </div>
  </div>
</div>`;

    // Insert HTML into Container
    movieContainer.innerHTML = template;
    handleRatings(data.Ratings, document.getElementById("movieRatings"));
  } catch (error) {
    console.error(error);
    displayErrorMessage("An error occurred while fetching movie details.");
  }
}

// // Step 5: Define Function handleRatings
// function handleRatings(ratings, targetDiv) {
//   if (!ratings) return;

//   const ratingSources = [
//     "Internet Movie Database",
//     "Rotten Tomatoes",
//     "Metacritic",
//   ];

function handleRatings(ratings, targetDiv) {
  if (!ratings) return;

  const ratingSources = [
    "Internet Movie Database",
    "Rotten Tomatoes",
    "Metacritic",
  ];

  ratings.forEach((rating) => {
    if (ratingSources.includes(rating.Source)) {
      const ratingDiv = document.createElement("div");
      const sourceSpan = document.createElement("span");
      const valueSpan = document.createElement("span");

      sourceSpan.style.fontWeight = "bold";
      sourceSpan.innerText = `${rating.Source}: `;
      valueSpan.innerText = `${rating.Value}`;

      ratingDiv.appendChild(sourceSpan);
      ratingDiv.appendChild(valueSpan);
      targetDiv.appendChild(ratingDiv);
    }
  });
}

// // Challenge 4: Enter Key Search Support
searchInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    searchButton.click(); // Trigger a click event on the search button
  }
});

// // Challenge 6: Rating Source Customization (example using checkboxes)
const ratingCheckboxes = document.querySelectorAll(".rating-checkbox");

ratingCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    const selectedSources = [];

    ratingCheckboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        selectedSources.push(checkbox.value);
      }
    });

  });
});
