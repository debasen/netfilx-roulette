import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SortControl from './sortControl';

describe('Test SortControl component', () => {
  test('it renders the SortControl component', () => {
    render(<SortControl currentSelection="Release Date" handleSelectChange={() => { }} />);
    const labelElement = screen.getByText('SORT BY');
    const selectElement = screen.getByRole('combobox');

    expect(labelElement).toBeInTheDocument();
    expect(selectElement).toBeInTheDocument();

    expect(selectElement).toHaveValue('Release Date');
  });

  test('it calls the handleSelectChange function on select change', () => {
    const handleSelectChange = jest.fn();
    render(<SortControl currentSelection="Release Date" handleSelectChange={handleSelectChange} />);
    const selectElement = screen.getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: 'Title' } });
    expect(handleSelectChange).toHaveBeenCalledWith('Title');
  });
})
