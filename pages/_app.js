import '../styles/globals.css';
import './movieListPage.scss';
import '../components/dialog/dialog.scss';
import '../components/movieForm/movieForm.scss';
import '../components/movieTile/movieTile.scss';
import '../components/dropdown/dropdown.scss';
import '../components/genreList/genreList.scss';
import '../components/sortControl/sortControl.scss';
import '../components/movieDetails/movieDetails.scss';
import '../components/searchForm/searchForm.scss';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
export default MyApp
