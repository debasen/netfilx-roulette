import React, { useState } from 'react';
import MovieListPage from './components/movieListPage/movieListPage';
import SearchForm from './components/searchForm/searchForm';
import { Route, Routes } from 'react-router-dom';
import MovieDetailsWrapper from './components/movieDetailsWrapper/movieDetailsWrapper';
import { INITAL_SEARCH_TERM } from './constants';
import './App.scss';

function App() {
  const [queryString, setqueryString] = useState("");
  const handleSearch = (searchTerm) => {
    setqueryString(searchTerm);
  };
  return (
    <Routes>
      <Route path="/" element={<MovieListPage query={queryString} />} >
        <Route index element={<SearchForm initialSearchTerm={INITAL_SEARCH_TERM} onChange={handleSearch} />} />
        <Route path=":movieId" element={<MovieDetailsWrapper />} />
      </Route>
    </Routes>
  );
}

export default App;