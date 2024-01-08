import { fireEvent, render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import ArticleRating, { ArticleRatingProps } from './ArticleRating';
import { useGetArticleRating, useRateArticle } from '../../api/articleRatingApi';

jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: (key: string) => key }),
}));

jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
}));

jest.mock('../../api/articleRatingApi', () => ({
    useGetArticleRating: jest.fn(),
    useRateArticle: jest.fn(() => [jest.fn(), { loading: false }]),
}));

describe('ArticleRating Component', () => {
    const mockUserData = { id: 'mockUserId' };
    const mockRatingData = {
        rate: 4,
    };

    const mockProps: ArticleRatingProps = {
        articleId: 'mockArticleId',
    };

    beforeEach(() => {
        (useSelector as jest.Mock).mockReturnValue(mockUserData);
        (useGetArticleRating as jest.Mock).mockReturnValue({
            data: [mockRatingData],
            isLoading: false,
        });
    });

    it('renders loading skeleton initially', () => {
        (useGetArticleRating as jest.Mock).mockReturnValue({
            data: undefined,
            isLoading: true,
        });

        render(<ArticleRating {...mockProps} />);
        expect(screen.getByTestId('skeleton-loader')).toBeInTheDocument();
    });

    it('renders RatingCard with rating data when loaded', () => {
        render(<ArticleRating {...mockProps} />);
        expect(screen.getByText('Оцените статью')).toBeInTheDocument();
    });

    it('calls handleRateArticle when onAccept is triggered', () => {
        const mockRateFunction = jest.fn();
        (useRateArticle as jest.Mock).mockReturnValue([mockRateFunction, { loading: false }]);

        render(<ArticleRating {...mockProps} />);
        fireEvent.click(screen.getByText('Accept')); 
        expect(mockRateFunction).toHaveBeenCalled();
    });

});
