import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SortControl from './sortControl';

const mockOptions = ["Release Date", "Title"];
const mockCurrentSelection = "Release Date";
const mockHandleSelectChange = jest.fn();

test('renders label and Dropdown with provided options and current selection', () => {
  const { getByText, getByLabelText } = render(<SortControl currentSelection={mockCurrentSelection} handleSelectChange={mockHandleSelectChange} />);
  
  expect(getByText('SORT BY')).toBeInTheDocument();
  expect(getByLabelText(/sort by/i)).toBeInTheDocument(); // Using a case-insensitive regex for the label text

  mockOptions.forEach((option) => {
    expect(getByText(option.toUpperCase())).toBeInTheDocument();
  });

  expect(getByText('RELEASE DATE')).toHaveClass('optionSelected');
});

test('calls handleSelectChange prop when a new option is selected', () => {
  const { getByLabelText } = render(<SortControl currentSelection={mockCurrentSelection} handleSelectChange={mockHandleSelectChange} />);

  fireEvent.change(getByLabelText(/sort by/i), { target: { value: 'Title' } });

  expect(mockHandleSelectChange).toHaveBeenCalledWith('Title');
});

test('updates selected option state when a new option is selected', () => {
  const { getByText } = render(<SortControl currentSelection={mockCurrentSelection} handleSelectChange={mockHandleSelectChange} />);

  fireEvent.click(getByText('RELEASE DATE'));
  fireEvent.click(getByText('TITLE'));

  expect(getByText('Title')).toHaveClass('optionSelected');
  expect(mockHandleSelectChange).toHaveBeenCalledWith('Title');
});
