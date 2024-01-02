import { render } from '@testing-library/react';
import { CommentList } from './CommentList';

describe('CommentList component', () => {
    it('renders loading state when isLoading is true', () => {
        const { container } = render(<CommentList isLoading />);
        const loadingCards = container.querySelectorAll('.comment-card.loading');

        expect(loadingCards.length).toBe(3);
    });

    it('renders "Комментарии отсутствуют" text when comments are empty', () => {
        const { getByText } = render(<CommentList isLoading={false} comments={[]} />);
        const noCommentsText = getByText('Комментарии отсутствуют');

        expect(noCommentsText).toBeInTheDocument();
    });

    it('renders with custom className', () => {
        const customClassName = 'custom-class';
        const { container } = render(<CommentList isLoading={false} className={customClassName} />);
        const component = container.firstChild;

        expect(component).toHaveClass(customClassName);
    });
});
