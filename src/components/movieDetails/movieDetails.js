import './movieDetails.scss';

const MovieDetails = ({ movie }) => {
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.poster_path} alt="Movie Poster" />
            </div>
            <div className="movie-info">
                <h2 className="movie-title">{movie.title}</h2>
                <p className="movie-tagline">{movie.tagline}</p>
                <div className="movie-details">
                    <p><strong>Release Date: </strong>{movie.release_date}</p>
                    <p><strong>Runtime: </strong>{movie.runtime}</p>
                    <p><strong>Genres: </strong>{movie.genres.map((genre) => {
                        return <span key={genre} className="genre"> {genre}{movie.genres.indexOf(genre) < movie.genres.length - 1 ? "," : "."} </span>
                    })}</p>
                    <p><strong>Overview: </strong>{movie.overview}</p>
                    <p><strong>Budget: </strong>${movie.budget}</p>
                    <p><strong>Revenue: </strong>${movie.revenue}</p>
                    <p><strong>Vote Average: </strong> {movie.vote_average}</p>
                    <p><strong>Vote Count: </strong> {movie.vote_count}</p>
                </div>
            </div>
        </div>
    )
}
export default MovieDetails;