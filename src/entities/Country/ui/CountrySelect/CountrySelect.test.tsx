import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CountrySelect } from './CountrySelect';
import { Country } from '../../model/types/country';

describe('CountrySelect', () => {
    it('renders with default value', () => {
        const { getByLabelText } = render(<CountrySelect />);
        expect(getByLabelText('Укажите страну')).toBeInTheDocument();
    });

    it('triggers onChange callback when an option is selected', () => {
        const mockOnChange = jest.fn();
        const { getByLabelText, getByText } = render(
            <CountrySelect onChange={mockOnChange} />,
        );

        fireEvent.change(getByLabelText('Укажите страну'), {
            target: { value: Country.Russia },
        });

        expect(mockOnChange).toHaveBeenCalledWith(Country.Russia);
    });

    it('renders with provided value', () => {
        const { getByDisplayValue } = render(
            <CountrySelect value={Country.Belarus} />,
        );
        expect(getByDisplayValue('Belarus')).toBeInTheDocument();
    });

    it('renders with readonly attribute', () => {
        const { getByLabelText } = render(<CountrySelect readonly />);
        expect(getByLabelText('Укажите страну')).toHaveAttribute('readonly');
    });
});
