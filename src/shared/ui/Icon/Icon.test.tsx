import React from 'react';
import { render } from '@testing-library/react';
import { Icon } from './Icon';

describe('Icon Component', () => {
    const MockSvg = (props: React.SVGProps<SVGSVGElement>) => (
        <svg data-testid="mock-svg" {...props} />
    );

    it('renders Icon component with default props', () => {
        const { container } = render(
            <Icon Svg={MockSvg} />
        );
        const iconElement = container.querySelector('svg');

        expect(iconElement).toBeInTheDocument();
        expect(iconElement).toHaveClass('Icon');
    });

    it('renders Icon component with custom className', () => {
        const { container } = render(
            <Icon Svg={MockSvg} className="custom-class" />
        );
        const iconElement = container.querySelector('svg');

        expect(iconElement).toBeInTheDocument();
        expect(iconElement).toHaveClass('Icon');
        expect(iconElement).toHaveClass('custom-class');
    });

    it('renders Icon component with inverted style', () => {
        const { container } = render(
            <Icon Svg={MockSvg} inverted />
        );
        const iconElement = container.querySelector('svg');

        expect(iconElement).toBeInTheDocument();
        expect(iconElement).toHaveClass('inverted');
    });

    it('passes otherProps to SVG element', () => {
        const onClick = jest.fn();
        const { container } = render(
            <Icon Svg={MockSvg} onClick={onClick} data-testid="custom-icon" />
        );
        const iconElement = container.querySelector('svg[data-testid="custom-icon"]');

        expect(iconElement).toBeInTheDocument();
        expect(iconElement).toHaveAttribute('onClick');
        iconElement?.dispatchEvent(new MouseEvent('click'));
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});
