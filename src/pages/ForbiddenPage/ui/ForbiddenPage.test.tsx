import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ForbiddenPage from './ForbiddenPage';

jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: jest.fn() }),
}));

describe('ForbiddenPage component', () => {
    it('renders the ForbiddenPage component with the correct text', () => {
        const tMock = jest.fn().mockReturnValue('У вас нет доступа к этой странице');

        render(<ForbiddenPage />);

        expect(tMock).toHaveBeenCalledWith('У вас нет доступа к этой странице');

        expect(screen.getByText('У вас нет доступа к этой странице')).toBeInTheDocument();
    });

    it('renders the ForbiddenPage component within the Page widget', () => {
        render(<ForbiddenPage />);

        expect(screen.getByTestId('ForbiddenPage')).toBeInTheDocument();
    });
});
