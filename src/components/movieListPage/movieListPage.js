import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios'
import { useSearchParams, Outlet, Link, useNavigate } from 'react-router-dom';
import GenreSelect from '../../components/genreSelect/genreSelect';
import MovieTile from '../../components/movieTile/movieTile';
import SortControl from '../../components/sortControl/sortControl';
import './movieListPage.scss';

function MovieListPage({ query }) {
    const [movieList, setMovieList] = useState([]);
    const [movieCount, setMovieCount] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams({
        sortBy: 'release_date',
        query: '',
        genre: ''
    });
    const navigate = useNavigate();
    const sortByQuery = searchParams.get('sortBy') || 'release_date';
    const selectedGenre = searchParams.get('genre') || 'All';
    // const [selectedGenre, setSelectedGenre] = useState('All');
    const getMoviesUrl = 'http://localhost:4000/movies';
    const genres = ['All', 'Action', 'Comedy', 'Drama', 'Science Fiction', 'Horror'];
    // Create a cancel token source
    // const cancelTokenSource = axios.CancelToken.source();
    useEffect(() => {
        if (query) {
            setSearchParams({ query: query, sortBy: sortByQuery, genre: selectedGenre });
        } else {
            if (sortByQuery !== 'release_date' || selectedGenre !== 'All') {
                navigate(`/?query=&sortBy=${sortByQuery}&genre=${selectedGenre}`)
            } else {
                navigate(`/`)
            }
        }
    }, [query])
    const handleGenreSelect = (selectedGenre) => {
        setSearchParams({ query: query, sortBy: sortByQuery, genre: selectedGenre });
    }
    const handleSortChange = (value) => {
        setSearchParams({ query: query, sortBy: value, genre: selectedGenre });
    };
    const onMovieClick = (movie) => {
        scrollToTop();
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
                sortBy: searchParams.get('sortBy'),
                sortOrder: 'asc',
                searchBy: 'title',
                search: searchParams.get('query'),
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
    }, [searchParams]);

    useEffect(() => {
        getMovies();
    }, [getMovies, searchParams]);

    if (error) {
        return <div>Error: {error?.message}</div>
    }

    return (
        <div className='app-container'>
            <Outlet />
            <div className="movie-genre-sort-by-container">
                <div className='genreSelectContainer'>
                    <GenreSelect genres={genres} selectedGenre={selectedGenre} onChange={handleGenreSelect} />
                </div>
                <div></div>
                <div className='sortByContainer'>
                    <SortControl currentSelection={sortByQuery} handleSelectChange={handleSortChange} />
                </div>
            </div>

            {/* <Counter initialCount={INITAL_COUNT} /> */}
            <span className="bold-br"></span>
            {!loading ?
                (<div>
                    <p className='movie-count'><b>{movieCount}</b> movies found</p>
                    <div className='movie-tile-container'>
                        {movieList.map((movie) => {
                            return <Link to={`/${movie.id}`}><MovieTile key={movie.id} movie={movie} onClick={onMovieClick} /></Link>;
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