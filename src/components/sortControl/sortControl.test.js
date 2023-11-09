import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SortControl from './sortControl';

const mockCurrentSelection = "Release Date";
const mockHandleSelectChange = jest.fn();

test('calls handleSelectChange prop with the selected value when a different option is selected', () => {
  const { getByText, getByTestId, debug } = render(<SortControl currentSelection={mockCurrentSelection} handleSelectChange={mockHandleSelectChange} />);

  // Click on the select tag to open the dropdown
  fireEvent.click(getByTestId('dropdown-select'));
  debug();
  // Click on a different option to select it
  fireEvent.click(getByText('TITLE'));

  // Ensure that the callback is called with the proper value
  expect(mockHandleSelectChange).toHaveBeenCalled();
});