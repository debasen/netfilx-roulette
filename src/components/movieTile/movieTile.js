import './movieTile.css';

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
            <div className="movie-details">
                <h2 className="movie-title">{movieName}</h2>
                <p className="release-year">Release Year:{releaseDate}</p>
                <ul className="genre-list">{
                    genres.map((genre) => {
                        return <li key={genre} className="genre">{genre}</li>
                    })
                }
                </ul>
            </div>
            <button className="menu-button">⋮</button>
        </div>
    )
}
export default MovieTile;