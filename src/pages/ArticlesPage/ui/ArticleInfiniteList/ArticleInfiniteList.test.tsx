import React from 'react';
import { render } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { ArticleInfiniteList } from './ArticleInfiniteList';


describe('ArticleInfiniteList component', () => {
    beforeEach(() => {
        (useSelector as jest.Mock).mockClear();
    });

    it('renders loading state when isLoading is true', () => {
        (useSelector as jest.Mock).mockReturnValueOnce(true);
        const { getByText } = render(<ArticleInfiniteList />);
        expect(getByText('Loading...')).toBeInTheDocument();
    });

    it('renders error state when error is present', () => {
        (useSelector as jest.Mock).mockReturnValueOnce(false);
        (useSelector as jest.Mock).mockReturnValueOnce('Some error message');
        const { getByText } = render(<ArticleInfiniteList />);
        expect(getByText('Ошибка при загрузке статей')).toBeInTheDocument();
    });

    it('renders article list when neither loading nor error', () => {
        (useSelector as jest.Mock).mockReturnValueOnce(false);
        (useSelector as jest.Mock).mockReturnValueOnce(false);
        const { getByTestId } = render(<ArticleInfiniteList />);
        expect(getByTestId('article-list')).toBeInTheDocument();
    });
});
