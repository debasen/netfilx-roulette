import React, { useState } from 'react';
import MovieListPage from './components/movieListPage/movieListPage';
import SearchForm from './components/searchForm/searchForm';
import { Route, Routes, useSearchParams } from 'react-router-dom';
import MovieDetailsWrapper from './components/movieDetailsWrapper/movieDetailsWrapper';
import './App.scss';

function App() {
  const [queryString, setqueryString] = useState("");
  const [searchParams, setSearchParams] = useSearchParams({ query: '' });

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      searchParams.set('query', searchTerm);
    } else {
      searchParams.delete('query');
    }

    setSearchParams(searchParams);
    setqueryString(searchTerm);
  };
  return (
    <Routes>
      <Route path="/" element={<MovieListPage query={queryString} />} >
        <Route index element={<SearchForm initialSearchTerm={searchParams.get('query')} onChange={handleSearch} />} />
        <Route path=":movieId" element={<MovieDetailsWrapper />} />
      </Route>
    </Routes>
  );
}

export default App;