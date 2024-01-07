import React from 'react';
import { render } from '@testing-library/react';
import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';
import { ArticleTextBlock } from '../../model/types/article';
import { ArticleBlockType } from '../..';

jest.mock('react-i18next', () => ({
    useTranslation: () => ({ t: jest.fn() }),
}));

describe('ArticleTextBlockComponent', () => {
    const block: ArticleTextBlock = {
        type: ArticleBlockType.TEXT,
        id: '1',
        title: 'Sample Title',
        paragraphs: ['Paragraph 1', 'Paragraph 2'],
    };

    it('renders component with provided block data', () => {
        const { getByText } = render(<ArticleTextBlockComponent block={block} />);

        expect(getByText('Sample Title')).toBeInTheDocument();
        expect(getByText('Paragraph 1')).toBeInTheDocument();
        expect(getByText('Paragraph 2')).toBeInTheDocument();
    });

    it('renders component without title if block title is not provided', () => {
        const blockWithoutTitle: ArticleTextBlock = {
            type: ArticleBlockType.TEXT,
            id: '1',
            title: 'Sample Title',
            paragraphs: ['Paragraph 1', 'Paragraph 2'],
        };
        const { queryByText } = render(<ArticleTextBlockComponent block={blockWithoutTitle} />);

        expect(queryByText('Sample Title')).not.toBeInTheDocument();
        expect(queryByText('Paragraph 1')).toBeInTheDocument();
        expect(queryByText('Paragraph 2')).toBeInTheDocument();
    });

});
