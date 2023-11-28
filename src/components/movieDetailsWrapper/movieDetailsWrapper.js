
import { useState,useEffect } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import MovieDetails from '../movieDetails/movieDetails';
import axios from 'axios'
const MovieDetailsWrapper = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const getMoviesByIdUrl = 'http://localhost:4000/movies/';
  console.log(movieId)
  useEffect(() => {
    axios.get(getMoviesByIdUrl+movieId)
        .then((response) => {
            setMovie(response.data);
            setLoading(false);
        })
        .catch((err) => {
            setError(err);
            setLoading(false);
        });
  }, [movieId]);
  const onCloseMovieDetails = () => {
    navigate(-1);
    }
    if (error) {
        return <div>Error: {error?.message}</div>
    }
  return !loading && !error &&<MovieDetails movie={movie} onCloseMovieDetails={onCloseMovieDetails}></MovieDetails>;
}

export default MovieDetailsWrapper;
