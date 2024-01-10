import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CurrencySelect } from './CurrencySelect';
import { Currency } from '../../model/types/currency';

describe('CurrencySelect', () => {
    const onChangeMock = jest.fn();

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders with provided value', () => {
        const { getByText } = render(
            <CurrencySelect value={Currency.EUR} onChange={onChangeMock} />
        );
        expect(getByText('EUR')).toBeInTheDocument();
    });

    it('calls onChange when a different currency is selected', () => {
        const { getByText } = render(
            <CurrencySelect value={Currency.RUB} onChange={onChangeMock} />
        );

        fireEvent.click(getByText('RUB'));
        fireEvent.click(getByText('EUR'));

        expect(onChangeMock).toHaveBeenCalledWith(Currency.EUR);
        expect(onChangeMock).toHaveBeenCalledTimes(1);
    });

    it('renders in readonly mode without triggering onChange', () => {
        const { getByText } = render(
            <CurrencySelect value={Currency.USD} onChange={onChangeMock} readonly />
        );

        fireEvent.click(getByText('USD'));

        expect(onChangeMock).not.toHaveBeenCalled();
    });

});
