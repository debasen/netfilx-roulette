import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios'

import SearchForm from '../../components/searchForm/searchForm';
import GenreSelect from '../../components/genreSelect/genreSelect';
import MovieTile from '../../components/movieTile/movieTile';
import MovieDetails from '../../components/movieDetails/movieDetails';
import SortControl from '../../components/sortControl/sortControl';
import { INITAL_SEARCH_TERM } from '../../constants';
import './movieListPage.scss';

function MovieListPage() {
    const [movieData, setMovieData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedMovie, setselectedMovie] = useState(null);
    const [selectedSortby, setSelectedSortby] = useState('release_date');
    const getMoviesUrl = 'http://localhost:4000/movies';
    const genres = ['Action', 'Comedy', 'Drama', 'Science Fiction', 'Horror'];
    const selectedGenre = 'Drama';

    const handleSearch = (searchTerm) => {
        getMovies('search', searchTerm);
    }
    const handleGenreSelect = (selectedGenre) => {
        getMovies('genre', selectedGenre);
    }
    const onMovieClick = (movie) => {
        setselectedMovie(movie);
        scrollToTop();
    }
    const onCloseMovieDetails = () => {
        setselectedMovie(null);
    }
    const handleSortChange = (value) => {
        setSelectedSortby(value);
        getMovies();
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const getMovies = useCallback((searchType, searchTerm) => {
        let url = `${getMoviesUrl}?sortBy=${selectedSortby}&sortOrder=asc`;
        if (searchType) {
            url += searchType === 'genre' ? '&searchBy=genres' : '&searchBy=title';
            url += `&search=${searchTerm}`;
        }

        axios.get(url)
            .then((response) => {
                setMovieData(response.data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, [selectedSortby]);

    useEffect(() => {
        getMovies();
    }, [getMovies]);

    if (error) {
        return <div>Error: {error?.message}</div>
    }

    return (
        <div className='app-container'>
            {
                selectedMovie ? <MovieDetails movie={selectedMovie} onCloseMovieDetails={onCloseMovieDetails}></MovieDetails>
                    : <SearchForm initialSearchTerm={INITAL_SEARCH_TERM} onChange={handleSearch} />
            }
            <div className="movie-genre-sort-by-container">
                <div className='genreSelectContainer'>
                    <GenreSelect genres={genres} selectedGenre={selectedGenre} onChange={handleGenreSelect} />
                </div>
                <div></div>
                <div className='sortByContainer'>
                    <SortControl currentSelection={selectedSortby} handleSelectChange={handleSortChange} />
                </div>
            </div>

            {/* <Counter initialCount={INITAL_COUNT} /> */}
            <span className="bold-br"></span>
            {!loading ?
                (<div>
                    <p className='movie-count'><b>{movieData.data.length}</b> movies found</p>
                    <div className='movie-tile-container'>
                        {movieData.data.map((movie) => {
                            return <MovieTile key={movie.id} movie={movie} onClick={onMovieClick} />;
                        })}
                    </div>
                </div>) :
                (<div>Loading...</div>)
            }
            {/* <Dialog isOpen={isModalOpen} onClose={closeModal}> */}
            {/* </Dialog> */}
        </div>
    );
}

export default MovieListPage;