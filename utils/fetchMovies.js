import axios from 'axios';

export async function fetchMovies(queryString) {
  const getMoviesUrl = 'http://localhost:4000/movies';
//   const genre = queryString?.genre === 'All' ? '' 

  try {
    const response = await axios.get(getMoviesUrl, {
      params: {
        sortBy: queryString?.sortBy,
        sortOrder: 'asc',
        searchBy: 'title',
        search: queryString?.query,
        filter: queryString?.genre === 'All' ? '' : queryString?.genre,
      },
    });

    return {
      initialSearchTerm: queryString?.query || '',
      genres: ['All', 'Action', 'Comedy', 'Drama', 'Science Fiction', 'Horror'],
      movieList: response.data.data,
      movieCount: response.data.totalAmount,
      error: null,
    };
  } catch (error) {
    return {
      initialSearchTerm: '',
      genres: [],
      movieList: [],
      movieCount: 0,
      error: error.message,
    };
  }
}
