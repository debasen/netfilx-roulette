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
    const [movieList, setMovieList] = useState([]);
    const [movieCount, setMovieCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedMovie, setselectedMovie] = useState(null);
    const [selectedSortby, setSelectedSortby] = useState('release_date');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedGenre, setSelectedGenre] = useState('All');
    const getMoviesUrl = 'http://localhost:4000/movies';
    const genres = ['All', 'Action', 'Comedy', 'Drama', 'Science Fiction', 'Horror'];
    // Create a cancel token source
    // const cancelTokenSource = axios.CancelToken.source();

    const handleSearch = (searchTerm) => {
        setSearchQuery(searchTerm);
    }
    const handleGenreSelect = (selectedGenre) => {
        setSelectedGenre(selectedGenre);
    }
    const handleSortChange = (value) => {
        setSelectedSortby(value);
    };
    const onMovieClick = (movie) => {
        setselectedMovie(movie);
        scrollToTop();
    }
    const onCloseMovieDetails = () => {
        setselectedMovie(null);
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const getMovies = useCallback(() => {
        const cancelTokenSource = axios.CancelToken.source();
        const genre = selectedGenre === 'All' ? '' : selectedGenre;
        axios.get(getMoviesUrl, {
            params: {
                sortBy: selectedSortby,
                sortOrder: 'asc',
                searchBy: 'title',
                search: searchQuery,
                filter: genre
            },
            cancelToken: cancelTokenSource.token
        })
            .then((response) => {
                setMovieList(response.data.data);
                setMovieCount(response.data.totalAmount);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
            return () => {
                cancelTokenSource.cancel('Request canceled');
            }
    }, [selectedSortby, selectedGenre, searchQuery]);

    useEffect(() => {
        getMovies();
    }, [getMovies, selectedSortby, searchQuery, selectedGenre]);

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
                    <p className='movie-count'><b>{movieCount}</b> movies found</p>
                    <div className='movie-tile-container'>
                        {movieList.map((movie) => {
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