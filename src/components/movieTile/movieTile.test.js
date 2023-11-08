import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MovieTile from './movieTile';

const sampleMovie = {
  id: 123,
  title: 'Sample Movie',
  poster_path: 'sample-image-url.jpg',
  release_date: '2023-01-01',
  genres: ['Action', 'Adventure', 'Sci-Fi'],
};
describe('Test MovieTile component', () => {
  test('it renders the MovieTile component', () => {
    render(<MovieTile movie={sampleMovie} onClick={() => { }} />);

    const titleElement = screen.getByText('Sample Movie');
    const genreElements = screen.getAllByRole('listitem');
    const menuButtonElement = screen.getByText('⋮');

    expect(titleElement).toBeInTheDocument();
    expect(genreElements.length).toBe(3); // There should be 3 genre list items
    expect(menuButtonElement).toBeInTheDocument();
  });

  test('it calls the onClick function when clicked', () => {
    const onClick = jest.fn();
    render(<MovieTile movie={sampleMovie} onClick={onClick} />);

    const movieTileElement = screen.getByText('Sample Movie');
    fireEvent.click(movieTileElement);

    expect(onClick).toHaveBeenCalledWith(sampleMovie);
  });
})
