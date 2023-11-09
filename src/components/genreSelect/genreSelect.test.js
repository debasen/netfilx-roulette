import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import GenreSelect from './genreSelect';

const mockGenres = ['ACTION', 'DRAMA', 'COMEDY'];
const mockSelectedGenre = 'DRAMA';
const mockOnChange = jest.fn();

describe('GenreSelect Component', () => {
    it('renders GenreList with provided genres and selected genre', () => {
        const { getByText } = render(<GenreSelect genres={mockGenres} selectedGenre={mockSelectedGenre} onChange={mockOnChange} />);

        mockGenres.forEach((genre) => {
            expect(getByText(genre)).toBeInTheDocument();
        });

        expect(getByText(mockSelectedGenre)).toHaveClass('selected-genre');
    });

    it('calls onChange prop when a genre is selected', () => {
        const { getByText } = render(<GenreSelect genres={mockGenres} selectedGenre={mockSelectedGenre} onChange={mockOnChange} />);

        fireEvent.click(getByText('COMEDY'));

        expect(mockOnChange).toHaveBeenCalledWith('COMEDY');
    });

    it('updates selected genre state when a genre is selected', () => {
        const { getByText } = render(<GenreSelect genres={mockGenres} selectedGenre={mockSelectedGenre} onChange={mockOnChange} />);

        fireEvent.click(getByText('ACTION'));

        expect(getByText('ACTION')).toHaveClass('selected-genre');
        expect(mockOnChange).toHaveBeenCalledWith('ACTION');
    });
});
