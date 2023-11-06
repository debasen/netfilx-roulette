
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.scss';
import SearchForm from './components/searchForm/searchForm';
import GenreSelect from './components/genreSelect/genreSelect';
import Counter from './components/counter/counter';
import MovieTile from './components/movieTile/movieTile';
import MovieDetails from './components/movieDetails/movieDetails';
import SortControl from './components/sortControl/sortControl';
import { INITAL_COUNT, INITAL_SEARCH_TERM } from './constants';
import Dialog from './components/dialog/dialog';
;
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMovie, setselectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSortby, setSelectedSortby] = useState('Release Date');
  const getMoviesUrl = 'http://localhost:4000/movies';
  const genres = ['Action', 'Comedy', 'Drama', 'Science Fiction', 'Horror'];
  const selectedGenre = 'Drama';

  const openModal = () => {
    setIsModalOpen(true);
  }
  const closeModal = () => {
    setIsModalOpen(false);
  }
  const handleSearch = (searchTerm) => {
    //Will remove after actual search implementation
    console.log("Searched with: " + searchTerm);
  }
  const handleGenreSelect = (selectedGenre) => {
    //Will remove after actual genre implementation
    console.log("Selected Genre: " + selectedGenre);
  }
  const onMovieClick = (movie) => {
    setselectedMovie(movie);
    openModal();
  }
  const handleSelectChange = (value) => {
    setSelectedSortby(value);
  };
  useEffect(() => {
    axios.get(getMoviesUrl)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (error) {
    return <div>Error: {error?.message}</div>
  }

  return (
    <div className='app-container'>
      <SearchForm initialSearchTerm={INITAL_SEARCH_TERM} onChange={handleSearch} />
      <GenreSelect genres={genres} selectedGenre={selectedGenre} onChange={handleGenreSelect} />
      {/* <Counter initialCount={INITAL_COUNT} /> */}
      <SortControl currentSelection={selectedSortby} handleSelectChange={handleSelectChange} />
      {!loading ?
        (<div className='movie-tile-container'>
          {data.data.map((movie) => {
            return <MovieTile key={movie.id} movie={movie} onClick={onMovieClick} />;
          })}
        </div>) :
        (<div>Loading...</div>)
      }
      <Dialog isOpen={isModalOpen} onClose={closeModal}>
        {selectedMovie && <MovieDetails movie={selectedMovie}></MovieDetails>}
      </Dialog>
    </div>
  );
}

export default App;

