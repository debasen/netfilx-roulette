import { Children, useEffect } from 'react';
import { useRouter } from 'next/router';
import GenreSelect from '../genreSelect/genreSelect';
import MovieTile from '../movieTile/movieTile';
import SortControl from '../sortControl/sortControl';

function Layout({ genres, movieList, movieCount, error, children }) {
  const router = useRouter();

  const handleGenreChange = (selectedGenre) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, genre: selectedGenre },
    });
  };

  const handleSortChange = (selectedSort) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, sortBy: selectedSort },
    });
  };

  const handleMovieClick = (movie) => {
    router.push("/"+ movie.id);
  }

  useEffect(() => {
    // Update URL when genre or sort changes
    const cleanup = () => {
      // You can perform cleanup here if needed
    };

    return cleanup;
  }, [router, handleGenreChange, handleSortChange]);

  if (error) {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <div className="app-container">
      {children}
      <div className="movie-genre-sort-by-container">
        <div className="genreSelectContainer">
          <GenreSelect genres={genres} selectedGenre={router.query?.genre ? router.query?.genre : 'All'} onChange={handleGenreChange} />
        </div>
        <div></div>
        <div className="sortByContainer">
          <SortControl handleSelectChange={handleSortChange} />
        </div>
      </div>

      <span className="bold-br"></span>
      <div>
        <p className="movie-count">
          <b>{movieCount}</b> movies found
        </p>
        <div className="movie-tile-container">
          {movieList && movieList.length > 0 ? (
            movieList.map((movie) => (
              <MovieTile key={movie.id} movie={movie} onClick={handleMovieClick}/>
            ))
          ) : (
            <p>No movies found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Layout;
