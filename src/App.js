import logo from './logo.svg';
import './App.css';
import SearchForm from './components/searchForn/searchForm';
import GenreSelect from './components/genreSelect/genreSelect';
import Counter from './components/counter/counter';
function App() {
  return (
    <div>
    <SearchForm/>
    <GenreSelect/>
    <Counter/>
    </div>
  );
}

export default App;
