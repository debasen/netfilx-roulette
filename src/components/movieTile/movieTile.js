import './movieTile.scss';

const MovieTile = ({ movie, onClick }) => {
    let { poster_path: imageUrl, title: movieName, release_date: releaseDate, genres } = movie;
    const onMovieSelect = () => {
        onClick(movie)
    }
    return (
        <div className="movie-tile" onClick={onMovieSelect}>
            <div className="movie-poster">
                <img src={imageUrl} alt={movieName} />
            </div>
            <div className="movie-tile-details">
                <div className="movie-details-left">
                    <p className="movie-title">{movieName}</p>
                    <p className='movie-tile-genre'>{genres.join(', ')}</p>
                </div>
                <div className="movie-details-right">
                    <p className="movie-tile-release-year">{releaseDate.split('-')[0]}</p>
                </div>
            </div>
            <button className="menu-button">⋮</button>
        </div>
    )
}
export default MovieTile;