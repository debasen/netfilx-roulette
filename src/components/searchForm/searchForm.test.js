import '@testing-library/jest-dom'

import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import SearchForm from './searchForm';

const searchCB = jest.fn();
const setup = (initialValue) => {
    const utils = render(<SearchForm initialSearchTerm={initialValue} onChange={searchCB}></SearchForm>);
    const searchInput = screen.getByLabelText('search-box');
    return { ...utils, searchInput };
}

describe('Test Search Component', () => {
    test('check if the search box is rendered with inital value', () => {
        const { searchInput } = setup("Some Movie");
        expect(searchInput.value).toBe("Some Movie");
    })
    test('check onChange event', () => {
        setup("Search Term");
        fireEvent.click(screen.getByText('Search'));
        expect(searchCB).toBeCalledWith("Search Term");
    })
    test('check user input', () => {
        const { searchInput } = setup();
        fireEvent.change(searchInput, { target: { value: 'New Movie' } });
        fireEvent.click(screen.getByText('Search'));
        expect(searchCB).toBeCalledWith('New Movie');
    })
    test('check user input with enter key', () => {
        const { searchInput } = setup();
        fireEvent.change(searchInput, { target: { value: 'New Movie' } });
        fireEvent.submit(searchInput);
        expect(searchCB).toBeCalledWith('New Movie');
    })
})
