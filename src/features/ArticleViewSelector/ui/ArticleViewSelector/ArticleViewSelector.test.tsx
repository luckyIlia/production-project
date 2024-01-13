import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ArticleViewSelector } from './ArticleViewSelector';
import { ArticleView } from '@/entities/Article';

describe('ArticleViewSelector', () => {
    it('renders correctly with the given props', () => {
        const onViewClickMock = jest.fn();
        const { getByTestId } = render(
            <ArticleViewSelector view={ArticleView.SMALL} onViewClick={onViewClickMock} />
        );

        const smallViewButton = getByTestId('button-small');
        expect(smallViewButton).toBeInTheDocument();
    });

    it('calls onViewClick when a button is clicked', () => {
        const onViewClickMock = jest.fn();
        const { getByTestId } = render(
            <ArticleViewSelector view={ArticleView.BIG} onViewClick={onViewClickMock} />
        );

        const bigViewButton = getByTestId('button-big');
        fireEvent.click(bigViewButton);

        expect(onViewClickMock).toHaveBeenCalledWith(ArticleView.BIG);
    });
});
