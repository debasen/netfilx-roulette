import React from 'react';

function GenreList({ genres, selectedGenre, onChange }) {
  return (
    <div>
      <h2>Movie Genres:</h2>
      {genres.map((genre) => (
        <button
          key={genre}
          className={genre === selectedGenre ? 'selected' : ''}
          onClick={() => onChange(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}
export default GenreList;