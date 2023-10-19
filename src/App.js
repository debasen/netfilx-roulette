import './App.css';
import SearchForm from './components/searchForm/searchForm';
import GenreSelect from './components/genreSelect/genreSelect';
import Counter from './components/counter/counter';
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
      <SearchForm initialSearchTerm='Movie' onChange={handleSearch} />
      <GenreSelect genres={genres} selectedGenre={selectedGenre} onChange={handleGenreSelect} />
      <Counter initialCount={3} />
    </div>
  );
}

export default App;
