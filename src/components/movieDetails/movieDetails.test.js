import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MovieDetails from './movieDetails';

const mockMovie = {
  title: 'Test Movie',
  poster_path: 'test-poster.jpg',
  vote_average: 7.5,
  genres: ['Action', 'Adventure'],
  tagline: 'An exciting movie',
  release_date: '2022-01-01',
  runtime: 120,
  overview: 'This is a test movie overview.',
};

const mockOnCloseMovieDetails = jest.fn();

test('renders movie details with correct content', () => {
  const { getByText, getByAltText } = render(<MovieDetails movie={mockMovie} onCloseMovieDetails={mockOnCloseMovieDetails} />);

  expect(getByText('TEST MOVIE')).toBeInTheDocument();
  expect(getByAltText('Movie Poster')).toBeInTheDocument();
  expect(getByText('An exciting movie')).toBeInTheDocument();
  expect(getByText(/Action/i)).toBeInTheDocument();
  expect(getByText('This is a test movie overview.')).toBeInTheDocument();
  expect(getByText('2022')).toBeInTheDocument();
  expect(getByText('2hr 0min')).toBeInTheDocument();
});

test('calls onCloseMovieDetails when close button is clicked', () => {
  const { getByText } = render(<MovieDetails movie={mockMovie} onCloseMovieDetails={mockOnCloseMovieDetails} />);

  fireEvent.click(getByText('×'));

  expect(mockOnCloseMovieDetails).toHaveBeenCalled();
});
