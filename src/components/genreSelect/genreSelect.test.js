import '@testing-library/jest-dom'

import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import GenreSelect from './genreSelect';

const genreSelectCB = jest.fn();
const setup = (genres, selectedGenre) => {
    const utils = render(<GenreSelect
        genres={genres}
        selectedGenre={selectedGenre}
        onChange={genreSelectCB}></GenreSelect>);
    return { ...utils };
}
describe('Test Genre Select Component', () => {
    test('check if the genre select is rendered with initial values', () => {
        setup(["Drama", "Horror"], "Drama");
        expect(screen.getByText("Drama")).not.toBeNull();
    })

    test('check if the selected genre is highlighted', () => {
        setup(["Drama", "Horror"], "Drama");
        fireEvent.click(screen.getByText("Horror"));
        expect(genreSelectCB).toBeCalledWith("Horror");
    })
})
