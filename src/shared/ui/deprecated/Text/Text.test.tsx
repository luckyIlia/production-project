import React from 'react';
import { render } from '@testing-library/react';
import { Text, TextTheme, TextAlign, TextSize } from './Text';

describe('Text component', () => {
    test('renders with default props', () => {
        const { getByTestId } = render(<Text />);
        const textComponent = getByTestId('Text');

        expect(textComponent).toBeInTheDocument();
        expect(textComponent).toHaveClass('primary', 'left', 'size_m');
    });

    test('renders with custom props', () => {
        const customProps = {
            title: 'Custom Title',
            text: 'Custom Text',
            theme: TextTheme.ERROR,
            align: TextAlign.CENTER,
            size: TextSize.L,
            'data-testid': 'CustomTestId',
        };

        const { getByTestId, getByText } = render(<Text {...customProps} />);
        const textComponent = getByTestId('CustomTestId');
        const headerTag = getByTestId('CustomTestId.Header');
        const paragraph = getByTestId('CustomTestId.Paragraph');

        expect(textComponent).toBeInTheDocument();
        expect(textComponent).toHaveClass('error', 'center', 'size_l');
        expect(headerTag.tagName).toBe('H1');
        expect(paragraph).toHaveTextContent('Custom Text');
    });

    test('renders without optional props', () => {
        const { queryByTestId } = render(<Text />);
        const textComponent = queryByTestId('Text');

        expect(textComponent).toBeInTheDocument();
        expect(queryByTestId('Text.Header')).toBeNull();
        expect(queryByTestId('Text.Paragraph')).toBeNull();
    });

});
