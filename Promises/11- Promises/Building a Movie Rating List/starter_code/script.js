// Movie class definition
class Movie {
  constructor(title, releaseDate, picture, rating) {
    this.title = title;
    this.releaseDate = releaseDate;
    this.picture = picture;
    this.rating = rating;
  }

  getTitle() {
    return this.title;
  }

  getReleaseDate() {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(this.releaseDate).toLocaleDateString(undefined, options);
  }

  getPicture() {
    return getImage(this.picture);
  }

  getRating() {
    return this.rating;
  }
}

// API constants
const API_BASE_URL = "https://api.themoviedb.org/3/";

// Function to get image URL
const getImage = (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`;

// Function to fetch movies
const fetchMovies = () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmVkZjQ1MzdkZTA1YTE4YjIyNTI2YmIwYjY4YzQyYyIsInN1YiI6IjY0ZWNmNzIwYzNjODkxMDBlMzYxODhjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FVFHc85FvZF8PyAFZc6b6X89WddHFp_zkVlEfmD59L4", // Replace with your actual access token
    },
  };

  fetch(
    `${API_BASE_URL}movie/popular?api_key="Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmVkZjQ1MzdkZTA1YTE4YjIyNTI2YmIwYjY4YzQyYyIsInN1YiI6IjY0ZWNmNzIwYzNjODkxMDBlMzYxODhjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FVFHc85FvZF8PyAFZc6b6X89WddHFp_zkVlEfmD59L4"`, // Replace with your actual API key
    options
  )
    .then((response) => response.json())
    .then((response) => {
      response.results.forEach((item) => {
        const movie = new Movie(
          item.title,
          item.release_date,
          item.poster_path,
          item.vote_average
        );
        createMovieCard(movie);
      });
      updateItemCount();
    })
    .catch((error) => {
      console.error(error);
      createErrorMessage();
    });
};

// Function to update item count
const updateItemCount = () => {
  const itemCountElement = document.querySelector(".sort-bar p");
  const movieElements = document.querySelectorAll(".movie");
  const movieCount = movieElements.length;
  itemCountElement.textContent = `${movieCount} items`;
};

// Function to create movie cards
function createMovieCard(movie) {
  const target = document.querySelector(".movies-list");
  target.innerHTML += `
    <div class="movie">
      <img class="vector-img" src="./images/Vector.svg">
      <a href="#">
        <img class="poster-img" src="./images/tabler-icon-plus.svg">
      </a>
      <img class="poster" src="${movie.getPicture()}">
      <div class="flex-container movie-info">
        <a href="#" class="title normal-link">${movie.getTitle()}</a>
        <p class="release-date"><strong>Release Date:</strong> ${movie.getReleaseDate()}</p>
        <div class="flex-container rate-trailer">
          <div class="flex-container trailer">
            <img src="./images/play.svg">
            <a href="#">Trailer</a>
          </div>
          <div class="flex-container rating">
            <img src="./images/star.svg">
            <p>${movie.getRating()}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Function to create error message
function createErrorMessage() {
  const target = document.querySelector(".movies-list");
  target.innerHTML = `<p>Error fetching movie data. Please try again later.</p>`;
}

// Call the fetchMovies function to start fetching movies
fetchMovies();
