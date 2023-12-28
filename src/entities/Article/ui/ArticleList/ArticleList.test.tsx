import React from 'react';
import { render } from '@testing-library/react';
import { ArticleList } from './ArticleList';
import { ArticleView } from '../../model/consts/articleConsts';

describe('ArticleList Component', () => {
    const mockArticles = [
        { id: 1, title: 'Article 1', content: 'Content 1' },
        { id: 2, title: 'Article 2', content: 'Content 2' },
    ];

    it('renders articles when not loading', () => {
        const { getByTestId, queryByText } = render(
            // @ts-ignore
            <ArticleList articles={mockArticles} isLoading={false} />,
        );

        const articleList = getByTestId('ArticleList');
        expect(articleList).toBeInTheDocument();

        expect(queryByText('Article 1')).toBeInTheDocument();
        expect(queryByText('Article 2')).toBeInTheDocument();
    });

    it('displays a message when no articles are found', () => {
        const { getByText } = render(
            <ArticleList articles={[]} isLoading={false} />,
        );

        expect(getByText('Статьи не найдены')).toBeInTheDocument();
    });

    it('renders skeleton components when loading', () => {
        const { getByTestId } = render(
            <ArticleList articles={[]} isLoading view={ArticleView.SMALL} />,
        );

        const skeletonList = getByTestId('ArticleList');
        expect(skeletonList).toBeInTheDocument();
        expect(skeletonList.querySelectorAll('.skeleton-element').length).toBe(9);
    });
});
