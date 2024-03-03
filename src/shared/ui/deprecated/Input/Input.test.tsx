import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Input } from './Input';

describe('Input component', () => {
    it('renders input with given placeholder', () => {
        const placeholderText = 'Enter text';
        const { getByPlaceholderText } = render(<Input placeholder={placeholderText} />);
        const inputElement = getByPlaceholderText(placeholderText);
        expect(inputElement).toBeInTheDocument();
    });

    it('calls onChange when input value changes', () => {
        const onChangeMock = jest.fn();
        const { getByRole } = render(<Input onChange={onChangeMock} />);
        const inputElement = getByRole('textbox');

        fireEvent.change(inputElement, { target: { value: 'Test value' } });

        expect(onChangeMock).toHaveBeenCalledWith('Test value');
    });

    it('handles autofocus correctly', () => {
        const { getByRole } = render(<Input autofocus />);
        const inputElement = getByRole('textbox');

        expect(document.activeElement).toBe(inputElement);
    });

    it('updates caret position on select', () => {
        const { getByRole } = render(<Input />);
        const inputElement = getByRole('textbox');

        fireEvent.select(inputElement, { target: { selectionStart: 5 } });
    });

    it('renders input as read-only', () => {
        const { getByRole } = render(<Input readonly />);
        const inputElement = getByRole('textbox');

        expect(inputElement).toHaveAttribute('readonly');
    });
});
