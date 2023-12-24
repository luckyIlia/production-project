import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Navbar } from './Navbar';

jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: any) => key,
    }),
}));

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
}));

describe('Navbar component', () => {
    it('renders login button when user is not authenticated', () => {
        const { getByText } = render(<Navbar />);
        const loginButton = getByText('Войти');
        expect(loginButton).toBeInTheDocument();
    });

    it('renders authenticated user elements when user is authenticated', () => {
        const mockAuthData = { /* Mock authenticated user data */ };
        jest.requireMock('react-redux').useSelector.mockReturnValue(mockAuthData);

        const { getByText } = render(<Navbar />);
        const appNameElement = getByText('John Doe');
        const createArticleButton = getByText('Создать статью');
        expect(appNameElement).toBeInTheDocument();
        expect(createArticleButton).toBeInTheDocument();
    });

    it('opens login modal when "Login" button is clicked', () => {
        const { getByText, getByRole } = render(<Navbar />);
        const loginButton = getByText('Войти');

        fireEvent.click(loginButton);
        const loginModal = getByRole('dialog');
        expect(loginModal).toBeInTheDocument();
    });

    it('closes login modal when onCloseModal function is called', () => {
        const { getByText, queryByRole } = render(<Navbar />);
        const loginButton = getByText('Войти');

        fireEvent.click(loginButton);
        let loginModal = queryByRole('dialog');
        expect(loginModal).toBeInTheDocument();

        fireEvent.click(getByText('Close'));
        loginModal = queryByRole('dialog');
        expect(loginModal).toBeNull();
    });
});
