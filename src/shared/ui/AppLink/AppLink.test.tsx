import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AppLink, AppLinkTheme } from './AppLink';

describe('AppLink component', () => {
    test('renders with default theme and children', () => {
        const { getByText } = render(
            <MemoryRouter>
                <AppLink to="/some-path">Link Text</AppLink>
            </MemoryRouter>
        );
        const linkElement = getByText('Link Text');
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveClass('primary');
    });

    test('renders with specified theme', () => {
        const { getByText } = render(
            <MemoryRouter>
                <AppLink to="/another-path" theme={AppLinkTheme.RED}>
                    Red Link
                </AppLink>
            </MemoryRouter>
        );
        const linkElement = getByText('Red Link');
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveClass('red');
    });

    test('applies custom className', () => {
        const { getByText } = render(
            <MemoryRouter>
                <AppLink to="/custom-path" className="custom-class">
                    Custom Link
                </AppLink>
            </MemoryRouter>
        );
        const linkElement = getByText('Custom Link');
        expect(linkElement).toBeInTheDocument();
        expect(linkElement).toHaveClass('custom-class');
    });
});
