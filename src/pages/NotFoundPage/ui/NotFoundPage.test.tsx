import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NotFoundPage } from './NotFoundPage';

describe('NotFoundPage', () => {
    it('renders without crashing', () => {
        const { getByTestId } = render(<NotFoundPage />);
        const notFoundPageElement = getByTestId('NotFoundPage');
        expect(notFoundPageElement).toBeInTheDocument();
    });

    it('renders with the correct text', () => {
        const { getByTestId } = render(<NotFoundPage />);
        const notFoundPageElement = getByTestId('NotFoundPage');
        expect(notFoundPageElement).toHaveTextContent('Страница не найдена');
    });

    it('renders with additional class name', () => {
        const customClassName = 'custom-class';
        const { getByTestId } = render(<NotFoundPage className={customClassName} />);
        const notFoundPageElement = getByTestId('NotFoundPage');
        expect(notFoundPageElement).toHaveClass(customClassName);
    });
});
