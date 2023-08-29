const API_BASE_URL = 'https://api.themoviedb.org/3/';


class Movie {
    constructor(title, date, picture, rating) {
        this.title = title;
        this.releaseDate = date;
        this.picture = picture;
        this.rating = rating;
    }
    
    getTitle() {
        return this.title
    }
    
    getReleaseDate() {
        return this.releaseDate
    }
    
    getPicture() {
        return this.picture
    }
    
    getRating() {
        return this.rating
    }
    
}

const getHttpOptions = () => ({
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODY2MzcwN2MzZDk1MGIwZTA3Zjc2MjU4MWQ1OTk1YSIsInN1YiI6IjY0ZTczYjYzNTk0Yzk0MDBmZmU1NzM1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.X1WqCFK1AdWBR-zyxkY1uW3h-VkPVV31Aqou9lgpUUQ'
    }
})

const getImage = (imgPath) => {
    console.log(99999999999);
    return `https://image.tmdb.org/t/p/original/${imgPath}`
}

async function fetchMovies () {
    try{
        const response = await (await fetch(`${API_BASE_URL}/movie/now_playing?language=en-US&page=1`,getHttpOptions())).json()
        response.results.forEach(item => {
            const movie = new Movie( item.title, item.release_date, getImage(item.poster_path || item.backdrop_path), item.rating);
            createMovieCard(movie);
            updateItemCount();
            })
    }
   catch (err){
        console.error( `${err} fetching/processing movies`);
   }
}

const updateItemCount = () => {
    const countBar = document.querySelector('.sort-bar > p');
    const movieCount = document.querySelectorAll('.movie').length;
    countBar.textContent = `${movieCount} items`
}

const createMovieCard = (movie) => {
    const target = document.querySelector('.movies-list');
    target.innerHTML += `<div class="movie">
    <img class='vector-img' src="./images/Vector.svg">
    <a href='#'>
    <img class='poster-img' src='./images/tabler-icon-plus.svg'>
    </a>
    <img class='poster' src='${movie.getPicture()}'>
    <h4>${movie.getTitle()}</h4>
    </div>`
}

fetchMovies();
