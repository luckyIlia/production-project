import { render, fireEvent } from '@testing-library/react';
import { RatingCard } from './RatingCard';

describe('RatingCard component', () => {
    const mockProps = {
        title: 'Test Title',
        feedbackTitle: 'Feedback Title',
        hasFeedback: true,
        onCancel: jest.fn(),
        onAccept: jest.fn(),
        rate: 3,
    };

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders RatingCard component correctly', () => {
        const { getByTestId } = render(<RatingCard {...mockProps} />);
        const ratingCardElement = getByTestId('RatingCard');
        expect(ratingCardElement).toBeInTheDocument();
    });

    it('handles star selection and feedback submission', () => {
        const { getByTestId, getByText } = render(<RatingCard {...mockProps} />);

        const starRating = getByTestId('starRating');
        fireEvent.click(starRating);

        const sendButton = getByTestId('RatingCard.Send');
        expect(sendButton).toBeInTheDocument();

        const feedbackInput = getByTestId('RatingCard.Input');
        fireEvent.change(feedbackInput, { target: { value: 'Test feedback' } });

        fireEvent.click(sendButton);

        expect(mockProps.onAccept).toHaveBeenCalledWith(1, 'Test feedback');
    });

    it('handles cancellation', () => {
        const { getByTestId } = render(<RatingCard {...mockProps} />);

        const closeButton = getByTestId('RatingCard.Close');
        fireEvent.click(closeButton);

        expect(mockProps.onCancel).toHaveBeenCalledWith(3);
    });
});
