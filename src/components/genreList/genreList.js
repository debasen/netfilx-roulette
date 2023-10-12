import React from 'react';

function GenreList({ genres, selectedGenre, onSelect }) {
  return (
    <div>
      <h2>Movie Genres:</h2>
      {genres.map((genre) => (
        <button
          key={genre}
          className={genre === selectedGenre ? 'selected' : ''}
          onClick={() => onSelect(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}
export default GenreList;