import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { NotificationButton } from './NotificationButton';

describe('NotificationButton component', () => {
    it('renders the button trigger correctly', () => {
        const { getByTestId } = render(<NotificationButton />);
        const buttonTrigger = getByTestId('notification-button-trigger');
        expect(buttonTrigger).toBeInTheDocument();
    });

    it('opens the drawer when clicked on the button trigger', () => {
        const { getByTestId, getByRole } = render(<NotificationButton />);
        const buttonTrigger = getByTestId('notification-button-trigger');

        fireEvent.click(buttonTrigger);

        const drawer = getByRole('drawer');
        expect(drawer).toBeInTheDocument();
    });

    it('closes the drawer when the close button is clicked', () => {
        const { getByTestId, getByRole, queryByRole } = render(
            <NotificationButton />
        );
        const buttonTrigger = getByTestId('notification-button-trigger');

        fireEvent.click(buttonTrigger);

        const closeBtn = getByRole('close-button');
        fireEvent.click(closeBtn);

        const drawer = queryByRole('drawer');
        expect(drawer).toBeNull();
    });
});
