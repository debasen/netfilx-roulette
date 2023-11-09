import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dialog from './dialog';

describe('Dialog Component', () => {
    test('renders null when isOpen is false', () => {
        const { container } = render(<Dialog isOpen={false} />);
        expect(container.firstChild).toBeNull();
    });

    test('renders the dialog when isOpen is true', () => {
        const { getByTestId } = render(<Dialog isOpen={true} />);
        expect(getByTestId('modal')).toBeInTheDocument();
    });

    test('calls onClose prop when close button is clicked', () => {
        const onCloseMock = jest.fn();
        const { getByTestId } = render(<Dialog isOpen={true} onClose={onCloseMock} />);
        fireEvent.click(getByTestId('close-button'));
        expect(onCloseMock).toHaveBeenCalled();
    });

    test('renders title and children inside the modal', () => {
        const title = 'Test Dialog';
        const content = <p>Test content</p>;
        const { getByText } = render(<Dialog isOpen={true} title={title}>{content}</Dialog>);

        expect(getByText(title)).toBeInTheDocument();
        expect(getByText('Test content')).toBeInTheDocument();
    });
});
