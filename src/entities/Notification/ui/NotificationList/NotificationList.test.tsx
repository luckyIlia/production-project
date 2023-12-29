import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { NotificationList } from './NotificationList';

jest.mock('../../api/notificationApi', () => ({
    useNotifications: jest.fn(() => ({
        data: [
            { id: 1, message: 'Notification 1' },
            { id: 2, message: 'Notification 2' },
        ],
        isLoading: false,
    })),
}));

describe('NotificationList component', () => {

    it('renders notifications when isLoading is false', async () => {
        render(<NotificationList />);

        await waitFor(() => {
            expect(screen.getByText('Notification 1')).toBeInTheDocument();
            expect(screen.getByText('Notification 2')).toBeInTheDocument();
        });
    });

    it('renders with a custom className', async () => {
        render(<NotificationList className="custom-class" />);

        const notificationList = screen.getByTestId('notification-list');
        expect(notificationList).toHaveClass('custom-class');
    });

});
