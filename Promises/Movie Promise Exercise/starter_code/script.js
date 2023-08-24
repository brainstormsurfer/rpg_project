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
const getHttpOptions = () => (
  {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer your-bearer-token-here'
    }
  });
