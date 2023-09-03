async function fetchMovies() {
  try {
    const response = await fetch(`${API_BASE_URL}movie/now_playing?language=en-US&page=1`, getHttpOptions());
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();

    data.results.forEach(item => {
      const movie = new Movie(
        item.title,
        item.release_date,
        item.poster_path || item.backdrop_path,
        item.vote_average
      );
      createMovieCard(movie);
    });

    updateItemCount();
  } catch (err) {
    console.error(err);
    createErrorMessage();
  }
}
