
import { useRouter } from 'next/router';
import React,{useState,useEffect} from 'react';
import MovieDetails from '../components/movieDetails/movieDetails';
import axios from 'axios';
import Layout from '../components/layout/layout';
import { fetchMovies } from '../utils/fetchMovies';
const MovieDetailsWrapper = ({ genres, movieList, movieCount, error }) => {
    const router = useRouter();
    const { id } = router.query;
    const API_MOVIES_PATH = 'http://localhost:4000/movies';
    const [movieState, setMovieState] = useState({ movie: null, loading: true, error: null });
    // const navigate = useNavigate();
    useEffect(() => {
        if(id){
            axios.get(API_MOVIES_PATH + '/' + id)
            .then((response) => {
              setMovieState({ ...movieState, movie: response.data, loading: false });
            })
            .catch((err) => {
              setMovieState({ ...movieState, error: err, loading: false });
            });
        }
    }, [id]);
    const onCloseMovieDetails = () => {
    router.back();
    }
    if (movieState.error) {
      return <div>Error: {movieState.error?.message}</div>
    }
    return !movieState.loading
      && !movieState.error
      && <Layout genres={genres} movieList={movieList} movieCount={movieCount} error={error}><MovieDetails movie={movieState.movie} onCloseMovieDetails={onCloseMovieDetails}></MovieDetails></Layout>;
  };


  export async function getServerSideProps(context) {
    const { query } = context;
  
    return {
      props: await fetchMovies(query),
    };
  }

export default MovieDetailsWrapper;
