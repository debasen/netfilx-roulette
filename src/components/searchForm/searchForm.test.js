import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchForm from './searchForm';

describe('SearchForm Component', () => {
    const mockProps = {
        initialSearchTerm: 'Initial Term',
        onChange: jest.fn(),
    };

    it('renders with initial search term and calls onChange prop on submit', () => {
        const { getByLabelText, getByText } = render(<SearchForm {...mockProps} />);

        const searchBox = getByLabelText('search-box');
        const submitButton = getByText('SEARCH');

        expect(searchBox).toHaveValue('Initial Term');

        fireEvent.change(searchBox, { target: { value: 'New Term' } });
        expect(searchBox).toHaveValue('New Term');

        fireEvent.click(submitButton);
        expect(mockProps.onChange).toHaveBeenCalledWith('New Term');
    });

    it('renders AddMovie component', () => {
        const { getByText } = render(<SearchForm {...mockProps} />);

        expect(getByText('+ ADD MOVIE')).toBeInTheDocument();
    });
});
