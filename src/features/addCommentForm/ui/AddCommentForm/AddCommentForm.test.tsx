import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddCommentForm from './AddCommentForm';

describe('AddCommentForm Component', () => {
    const mockOnSendComment = jest.fn();

    it('renders AddCommentForm correctly', () => {
        const { getByPlaceholderText, getByText } = render(
            <AddCommentForm onSendComment={mockOnSendComment} />
        );

        expect(getByPlaceholderText('Введите текст комментария')).toBeInTheDocument();
        expect(getByText('Отправить')).toBeInTheDocument();
    });

    it('calls onSendComment function with input text on button click', () => {
        const { getByText, getByPlaceholderText } = render(
            <AddCommentForm onSendComment={mockOnSendComment} />
        );

        const input = getByPlaceholderText('Введите текст комментария');
        const button = getByText('Отправить');

        fireEvent.change(input, { target: { value: 'Test comment' } });
        fireEvent.click(button);

        expect(mockOnSendComment).toHaveBeenCalledWith('Test comment');
    });
});
