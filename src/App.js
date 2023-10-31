import './App.css';
import SearchForm from './components/searchForm/searchForm';
import GenreSelect from './components/genreSelect/genreSelect';
import Counter from './components/counter/counter';
import { INITAL_COUNT, INITAL_SEARCH_TERM } from './constants';

function App() {
  const genres = ['Action', 'Comedy', 'Drama', 'Science Fiction', 'Horror'];
  const selectedGenre = 'Drama';
  const handleSearch = (searchTerm) => {
    console.log("Searched with: " + searchTerm);
  }
  const handleGenreSelect = (selectedGenre) => {
    console.log("Selected Genre: " + selectedGenre);
  }
  return (
    <div>
      <SearchForm initialSearchTerm={INITAL_SEARCH_TERM} onChange={handleSearch} />
      <GenreSelect genres={genres} selectedGenre={selectedGenre} onChange={handleGenreSelect} />
      <Counter initialCount={INITAL_COUNT} />
    </div>
  );
}

export default App;
