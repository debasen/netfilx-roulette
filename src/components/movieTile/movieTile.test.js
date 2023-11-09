import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import MovieTile from './movieTile';

const mockMovie = {
    poster_path: 'path/to/image.jpg',
    title: 'Test Movie',
    release_date: '2023-01-01',
    genres: ['Action', 'Drama'],
};

describe('MovieTile Component', () => {
    test('renders movie details correctly', () => {
        const { getByText, getByAltText } = render(<MovieTile movie={mockMovie} onClick={() => {}} />);

        expect(getByAltText('Test Movie')).toBeInTheDocument();
        expect(getByText('Test Movie')).toBeInTheDocument();
        expect(getByText('Action, Drama')).toBeInTheDocument();
        expect(getByText('2023')).toBeInTheDocument();
    });

    test('calls onClick prop when clicked', () => {
        const onClickMock = jest.fn();
        const { getByText } = render(<MovieTile movie={mockMovie} onClick={onClickMock} />);

        fireEvent.click(getByText('Test Movie'));
        expect(onClickMock).toHaveBeenCalledWith(mockMovie);
    });

    test('opens edit modal when "Edit" is clicked', () => {
        const { getByText, getByTestId } = render(<MovieTile movie={mockMovie} onClick={() => {}} />);

        fireEvent.click(getByText('⋮'));
        fireEvent.click(getByText('Edit'));

        expect(getByTestId('modal')).toBeInTheDocument();
    });

    test('opens delete modal when "Delete" is clicked', () => {
        const { getByText, getByTestId } = render(<MovieTile movie={mockMovie} onClick={() => {}} />);

        fireEvent.click(getByText('⋮'));
        fireEvent.click(getByText('Delete'));

        expect(getByTestId('modal')).toBeInTheDocument();
    });
});
