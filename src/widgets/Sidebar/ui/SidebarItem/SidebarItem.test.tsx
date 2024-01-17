import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { SidebarItem } from './SidebarItem';

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
}));

const useSelectorMock = useSelector as jest.Mock;

describe('SidebarItem', () => {
    it('renders without crashing', () => {
        const item = {
            path: '/example',
            text: 'Example',
            authOnly: false,
            Icon: () => <div>Icon</div>,
        };
        const collapsed = false;

        render(<SidebarItem item={item} collapsed={collapsed} />);
    });

    it('renders link when not collapsed', () => {
        const item = {
            path: '/example',
            text: 'Example',
            authOnly: false,
            Icon: () => <div>Icon</div>,
        };
        const collapsed = false;

        render(<SidebarItem item={item} collapsed={collapsed} />);

        expect(screen.getByRole('link')).toBeInTheDocument();
    });

    it('does not render link when collapsed', () => {
        const item = {
            path: '/example',
            text: 'Example',
            authOnly: false,
            Icon: () => <div>Icon</div>,
        };
        const collapsed = true;

        render(<SidebarItem item={item} collapsed={collapsed} />);

        expect(screen.queryByRole('link')).toBeNull();
    });

    it('does not render link when authOnly and not authenticated', () => {
        const item = {
            path: '/example',
            text: 'Example',
            authOnly: true,
            Icon: () => <div>Icon</div>,
        };

        useSelectorMock.mockReturnValue(false);

        render(<SidebarItem item={item} collapsed={false} />);

        expect(screen.queryByRole('link')).toBeNull();
    });

    it('renders link when authOnly and authenticated', () => {
        const item = {
            path: '/example',
            text: 'Example',
            authOnly: true,
            Icon: () => <div>Icon</div>,
        };

        useSelectorMock.mockReturnValue(true);

        render(<SidebarItem item={item} collapsed={false} />);

        expect(screen.getByRole('link')).toBeInTheDocument();
    });
});
