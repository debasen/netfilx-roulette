import React, { useState } from 'react';
import GenreList from '../genreList/genreList';

function GenreSelect() {
  const [selectedGenre, setSelectedGenre] = useState('');

  const genres = ['Action', 'Comedy', 'Drama', 'Science Fiction', 'Horror'];

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <div>
      <GenreList genres={genres} selectedGenre={selectedGenre} onSelect={handleGenreSelect} />
      <p>Selected Genre: {selectedGenre}</p>
    </div>
  );
}

export default GenreSelect;