import React from 'react';
import { render } from '@testing-library/react';
import { Card, CardTheme } from './Card';

describe('Card component', () => {
    it('renders with default props', () => {
        const { getByText } = render(<Card>Hello, Card!</Card>);
        expect(getByText('Hello, Card!')).toBeInTheDocument();
    });

    it('renders with custom theme', () => {
        const { container } = render(<Card theme={CardTheme.OUTLINED}>Outlined Card</Card>);
        const cardElement = container.firstChild;
        expect(cardElement).toHaveClass('outlined');
    });

    it('applies custom className', () => {
        const { container } = render(<Card className="custom-class">Custom Card</Card>);
        const cardElement = container.firstChild;
        expect(cardElement).toHaveClass('custom-class');
    });

    it('renders with "max" class when max prop is true', () => {
        const { container } = render(<Card max>Maximized Card</Card>);
        const cardElement = container.firstChild;
        expect(cardElement).toHaveClass('max');
    });

    it('renders with multiple classes', () => {
        const { container } = render(
            <Card className="custom-class" theme={CardTheme.OUTLINED} max>
        Custom Outlined Maximized Card
        </Card>
    );
        const cardElement = container.firstChild;
        expect(cardElement).toHaveClass('custom-class');
        expect(cardElement).toHaveClass('outlined');
        expect(cardElement).toHaveClass('max');
    });

});
