import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LangSwitcher } from './LangSwitcher';

jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: jest.fn((key) => key),
        i18n: { language: 'en', changeLanguage: jest.fn() },
    }),
}));

describe('LangSwitcher component', () => {
    it('renders with default props', () => {
        const { getByText } = render(<LangSwitcher />);
        expect(getByText('Язык')).toBeInTheDocument();
    });

    it('renders with short prop', () => {
        const { getByText } = render(<LangSwitcher short />);
        expect(getByText('Короткий язык')).toBeInTheDocument();
    });

    it('calls changeLanguage function when clicked', () => {
        const { getByText } = render(<LangSwitcher />);
        fireEvent.click(getByText('Язык'));
        expect(jest.fn()).toHaveBeenCalledTimes(1);
    });

    it('changes language when clicked', () => {
        const { getByText } = render(<LangSwitcher />);
        fireEvent.click(getByText('Язык'));
        expect('en').toBe('ru');
    });
});
