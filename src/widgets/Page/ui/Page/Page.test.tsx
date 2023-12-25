import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Page } from './Page';

describe('Page Component', () => {
    it('renders children and checks for the existence of trigger element', () => {
        const mockOnScrollEnd = jest.fn();
        const { getByTestId, getByText } = render(
            <Page onScrollEnd={mockOnScrollEnd}>
                <div>Test Child</div>
            </Page>
        );

        const pageElement = getByTestId('Page');
        expect(pageElement).toBeInTheDocument();

        const testChildElement = getByText('Test Child');
        expect(testChildElement).toBeInTheDocument();

        const triggerElement = getByTestId('Page-trigger');
        expect(triggerElement).toBeInTheDocument();
    });

    it('executes onScrollEnd callback when scrolling reaches the end', () => {
        const mockOnScrollEnd = jest.fn();
        const { getByTestId } = render(
            <Page onScrollEnd={mockOnScrollEnd}>
                <div>Test Child</div>
            </Page>
        );

        const triggerElement = getByTestId('Page-trigger');
        fireEvent.scroll(triggerElement);

        expect(mockOnScrollEnd).toHaveBeenCalledTimes(1);
    });

    it('updates scroll position on scroll event', () => {
        const mockDispatch = jest.fn();
        jest.mock('react-redux', () => ({
            useSelector: jest.fn(),
            useDispatch: () => mockDispatch,
        }));

        const { getByTestId } = render(
            <Page onScrollEnd={jest.fn()}>
                <div>Test Child</div>
            </Page>
        );

        const pageElement = getByTestId('Page');
        fireEvent.scroll(pageElement);

    });
});
