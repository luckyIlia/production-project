import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CommentCard } from './CommentCard';

describe('CommentCard component', () => {
    const mockComment = {
        user: {
            id: '1',
            username: 'testuser',
            avatar: 'test-avatar-url',
        },
        text: 'Test comment text',
    };

    it('renders loading state correctly', () => {
        const { getByTestId } = render(<CommentCard isLoading />);
        expect(getByTestId('CommentCard.Loading')).toBeInTheDocument();
    });

    it('renders content correctly', () => {
        const { getByTestId } = render(<CommentCard comment={mockComment} />);
        expect(getByTestId('CommentCard.Content')).toBeInTheDocument();
    });

    it('renders nothing when comment is not provided', () => {
        const { container } = render(<CommentCard />);
        expect(container.firstChild).toBeNull();
    });

    it('renders username and text correctly', () => {
        const { getByText } = render(<CommentCard comment={mockComment} />);
        expect(getByText(mockComment.user.username)).toBeInTheDocument();
        expect(getByText(mockComment.text)).toBeInTheDocument();
    });
});
