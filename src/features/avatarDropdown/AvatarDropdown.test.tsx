import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { AvatarDropdown } from './ui/AvatarDropdown/AvatarDropdown';

describe('AvatarDropdown', () => {
    test('renders profile and logout items', () => {
        const { getByText } = render(<AvatarDropdown />);
        expect(getByText('Профиль')).toBeInTheDocument();
        expect(getByText('Выйти')).toBeInTheDocument();
    });

    test('does not render admin panel item if not admin or manager', () => {
        const { queryByText } = render(<AvatarDropdown />);
        expect(queryByText('Админка')).toBeNull();
    });

    test('renders admin panel item if admin or manager', () => {
        jest.mock('react-redux', () => ({
            ...jest.requireActual('react-redux'),
            useSelector: jest.fn().mockReturnValue(true),
        }));
        const { getByText } = render(<AvatarDropdown />);
        expect(getByText('Админка')).toBeInTheDocument();
    });

    test('calls logout function when logout item is clicked', () => {
        const mockLogout = jest.fn();
        const { getByText } = render(<AvatarDropdown />);
        fireEvent.click(getByText('Выйти'));
        expect(mockLogout).toHaveBeenCalled();
    });
});
