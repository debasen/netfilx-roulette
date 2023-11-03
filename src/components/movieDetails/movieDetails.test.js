import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MovieDetails from './movieDetails';

describe('Test MovieDetails Component', () => {
  let movie;
  let onCloseMock;

  beforeEach(() => {
    movie = {
      title: 'Sample Movie',
      poster_path: '/sample.jpg',
      tagline: 'An Exciting Sample Movie',
      release_date: '2023-01-01',
      runtime: 120,
      genres: ['Action', 'Adventure', 'Sci-Fi'],
      overview: 'This is a sample movie overview. It tells you about the movie.',
      budget: 50000000,
      revenue: 150000000,
      vote_average: 7.5,
      vote_count: 1500,
    };
    onCloseMock = jest.fn();
  });

  test('renders MovieDetails when isOpen is true', () => {
    const { getByText, getByAltText } = render(
      <MovieDetails isOpen={true} onClose={onCloseMock} movie={movie} />
    );

    expect(getByText(movie.title)).toBeInTheDocument();
    expect(getByAltText('Movie Poster')).toBeInTheDocument();
  });

  test('does not render MovieDetails when isOpen is false', () => {
    const { queryByText, queryByAltText } = render(
      <MovieDetails isOpen={false} onClose={onCloseMock} movie={movie} />
    );

    expect(queryByText(movie.title)).toBeNull();
    expect(queryByAltText('Movie Poster')).toBeNull();
  });

  test('calls onClose when close button is clicked', () => {
    const { getByText } = render(
      <MovieDetails isOpen={true} onClose={onCloseMock} movie={movie} />
    );
    const closeButton = getByText('×');
    fireEvent.click(closeButton);
    expect(onCloseMock).toHaveBeenCalled();
  });

  test('displays movie details correctly', () => {
    const { getByText, getByAltText } = render(
      <MovieDetails isOpen={true} onClose={onCloseMock} movie={movie} />
    );

    expect(getByText(movie.title)).toBeInTheDocument();
    expect(getByAltText('Movie Poster')).toHaveAttribute('src', movie.poster_path);
  });

});
