import SearchForm from '../../components/searchForm/searchForm';
import Layout from '../../components/layout/layout';
import { fetchMovies } from '../../utils/fetchMovies';
import { useRouter } from 'next/router';
import { AddMovieForm } from '../../components/addMovieForm/addMovieForm';

function NewMovie({ initialSearchTerm, genres, movieList, movieCount, error }) {
  const router = useRouter();
  const handleQueryChange = (value) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, query: value },
    });
  };

  return (
    <Layout genres={genres} movieList={movieList} movieCount={movieCount} error={error}>
      <SearchForm initialSearchTerm={initialSearchTerm} onChange={handleQueryChange} />
      <AddMovieForm />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;

  return {
    props: await fetchMovies(query),
  };
}

export default NewMovie;
