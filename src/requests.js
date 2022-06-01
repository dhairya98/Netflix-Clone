const API_KEY = "655fc9fcc87ae0665d7e4ae04c245797";

const sunday = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    // Get Trending TMDB
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
    // Extractred from format of TMDB and included Netflix genres
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default sunday;
