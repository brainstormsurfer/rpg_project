const APIKey = "584740cb";
const OMDB_URL1 = `https://www.omdbapi.com/?t=`;
let OMDB_URL2 = "";
const OMDB_URL3 = `&apikey=${APIKey}`;
let isFirstRun = true;
const buttonSearch = document.querySelector("#searchButton");
const searchInput = document.querySelector("#searchInput");
const movieContainer = document.querySelector(".container");

buttonSearch.addEventListener("click", searchMovie());

const originBtnColor = getComputedStyle(buttonSearch).backgroundColor;
buttonSearch.addEventListener("click", () => {
  const inputMovieTitle = searchInput.value;
  searchMovie(inputMovieTitle);
  // else {
  // alert("Please enter a movie title");
  //   }
});

buttonSearch.addEventListener("mousedown", () => {
  buttonSearch.style.backgroundColor = "orange";
});

buttonSearch.addEventListener("mouseup", () => {
  buttonSearch.style.backgroundColor = originBtnColor;
});

searchInput.addEventListener("keypress", (e) => {
  const inputMovieTitle = searchInput.value;
  if (e.key === "Enter") searchMovie(inputMovieTitle);
});

async function searchMovie(title) {
  console.log(isFirstRun);
  if (!title && !isFirstRun) {
    alert("Please enter a movie title");
    throw new Error("Title wasn't found.");
  }
  OMDB_URL2 = title;
  searchInput.value = "";
  try {
    const response = await fetch(`${OMDB_URL1}${OMDB_URL2}${OMDB_URL3}`);
    const data = await response.json();
    let template = `
    <div class="movie-content">
  <img
src=${data.Poster}
    alt="Movie Poster" class="poster">
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
    `;

    // ?-Lesson: When dealing with innerHTML - always be aware and accurate regarding each tag, especially - closing tags

    if (isFirstRun) {
      template += `
        <div id="movieRatings">
        <div><span style="font-weight: bold;">${data.Ratings[0].Source}</span>&nbsp;<span>${data.Ratings[0].Value}</span></div>
        <div><span style="font-weight: bold;">${data.Ratings[1].Source}</span>&nbsp;<span>${data.Ratings[1].Value}</span></div>
        <div><span style="font-weight: bold;">${data.Ratings[2].Source}</span>&nbsp;<span>${data.Ratings[2].Value}</span></div>
        </div>
        </div>
        </div>
        `;
      movieContainer.innerHTML = template;
      isFirstRun = false;
    } else {
      template += `
        <div id="movieRatings">
        </div>
        `;
      movieContainer.innerHTML = template;
      const ratingsDiv = document.querySelector("#movieRatings");
      handleRatings(data.Ratings, ratingsDiv);
    }
  } catch (err) {
    console.error(err);
  }
}

// ?-Lesson: Expand your perspective. Adopt a flexible mindset while coding. Here's An opposite approach for `includes`

function handleRatings(ratings, targetDiv) {
  if (!ratings) throw new Error("Ratings property occurred an error");

  ratings.forEach((rating) => {
    if (
      ["Internet Movie Database", "Rotten Tomatoes", "Metacritic"].includes(
        rating.Source
      )
    ) {
      const ratingDiv = document.createElement("div");
      const sourceSpan = document.createElement("span");
      const valueSpan = document.createElement("span");

      sourceSpan.innerText = `${rating.Source}`;
      sourceSpan.style.fontWeight = "bold";
      sourceSpan.style.color = "purple";
      valueSpan.innerText = `${rating.Value}`;
      valueSpan.style.fontWeight = "bold";

      // For the purpose of spacing between each rating's source and value
      const nbspTextNode = document.createTextNode("\u00A0");

      ratingDiv.append(sourceSpan, nbspTextNode, valueSpan);
      targetDiv.appendChild(ratingDiv);
    } else {
      console.log("Couldn't found a rating platform");
    }
  });
}

searchMovie("The Usual Suspects");
