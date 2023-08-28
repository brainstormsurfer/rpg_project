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
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(this.releaseDate).toLocaleDateString(undefined, options);
  }

  getPicture() {
    return this.picture;
  }

  getRating() {
    return this.rating;
  }

}


const API_BASE_URL = 'https://api.themoviedb.org/3/';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWQ2NjdkYTU2Y2FjZDI4NTllOGM5YjNjZWM2NzMwNiIsInN1YiI6IjY0ZTRlMGFhNTk0Yzk0MDBhY2FlNjBhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NK7RAPmd7cB0hYr7hy0qetqPnz0-vVuBV5z_ZyMa-wY'
  }
}

const getImage = (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`

function fetchMovies() {
  fetch(`${API_BASE_URL}movie/popular?language=en-US&page=1`, options)
  .then(response => response.json())
  .then(response => {
    response.results.forEach(item => {
      const newMovie = new Movie(
        item.title,
        item.release_date,
        getImage(item.poster_path || item.backdrop_path),
        item.vote_average
      )
      createMovieCard(newMovie);
    })
    updateItemCount();
  })
  .catch(err => console.error(err));
};


const updateItemCount = () => {
  const itemCountElement = document.querySelector('.sort-bar p');
  const movieElements = document.querySelectorAll('.movie');
  const numberOfMovies = movieElements.length;
  itemCountElement.textContent = `${numberOfMovies} items`;
};

function createMovieCard(movie) {
  console.log(movie);
  let target = document.querySelector('.movies-list');
  target.innerHTML += `
          <div class="movie">
            <img class="vector-img" src="./images/Vector.svg">
            <a href="#">
            <img class="poster-img" src="./images/tabler-icon-plus.svg">
            </a>
            <img class="poster" src=${movie.getPicture()}>
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

fetchMovies();