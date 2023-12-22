import { render, fireEvent } from '@testing-library/react';
import { StarRating } from './StarRating';

describe('StarRating component', () => {
    const mockOnSelect = jest.fn();

    it('renders the StarRating component with default props', () => {
        const { getByTestId } = render(<StarRating />);

        expect(getByTestId('StarRating1')).toBeInTheDocument();
    });

    it('renders the StarRating component with selectedStars prop', () => {
        const { getByTestId } = render(<StarRating selectedStars={3} />);

        expect(getByTestId('StarRating3')).toHaveAttribute('data-selected', 'true');
    });

    it('calls onSelect when clicking on a star', () => {
        const { getByTestId } = render(<StarRating onSelect={mockOnSelect} />);
        const starElement = getByTestId('StarRating2');

        fireEvent.click(starElement);

        expect(mockOnSelect).toHaveBeenCalledWith(2);
    });
});
