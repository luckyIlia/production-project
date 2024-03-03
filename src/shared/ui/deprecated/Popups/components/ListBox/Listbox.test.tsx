import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ListBox, ListBoxItem } from './ListBox';

const mockOnChange = jest.fn();

const mockItems: ListBoxItem[] = [
    { value: '1', content: 'Option 1' },
    { value: '2', content: 'Option 2', disabled: true },
    { value: '3', content: 'Option 3' },
];

describe('ListBox component', () => {
    beforeEach(() => {
        mockOnChange.mockClear();
    });

    it('renders with default props', () => {
        render(<ListBox onChange={mockOnChange} />);
    });

    it('renders label when provided', () => {
        render(<ListBox label="Choose an option" onChange={mockOnChange} />);
    });

    it('renders options correctly', () => {
        render(<ListBox items={mockItems} value="1" onChange={mockOnChange} />);
    });

    it('calls onChange when an option is selected', () => {
        render(<ListBox items={mockItems} onChange={mockOnChange} />);
        const option = screen.getByText('Option 3');
        fireEvent.click(option);
        expect(mockOnChange).toHaveBeenCalledWith('3');
    });
});
