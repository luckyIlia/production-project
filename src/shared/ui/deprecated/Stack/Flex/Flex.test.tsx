import { render } from '@testing-library/react';
import { Flex, FlexJustify, FlexAlign, FlexGap } from './Flex';

describe('Flex component', () => {
    it('renders children', () => {
        const { getByText } = render(
            <Flex direction="row">
                <div>Child 1</div>
                <div>Child 2</div>
            </Flex>
        );

        expect(getByText('Child 1')).toBeInTheDocument();
        expect(getByText('Child 2')).toBeInTheDocument();
    });

    it('applies specified flex direction', () => {
        const { container } = render(<Flex direction="column">Test</Flex>);
        expect(container.firstChild).toHaveClass('directionColumn');
    });

    it.each(['start', 'center', 'end', 'between'] as FlexJustify[])(
        'applies justify %s class',
        (justify) => {
            const { container } = render(<Flex justify={justify} direction="column">Test</Flex>);
            expect(container.firstChild).toHaveClass(`justify${justify.charAt(0).toUpperCase()}${justify.slice(1)}`);
        }
    );

    it.each(['start', 'center', 'end'] as FlexAlign[])(
        'applies align %s class',
        (align) => {
            const { container } = render(<Flex align={align} direction="column">Test</Flex>);
            expect(container.firstChild).toHaveClass(`align${align.charAt(0).toUpperCase()}${align.slice(1)}`);
        }
    );

    it.each(['4', '8', '16', '32'] as FlexGap[])('applies gap %s class', (gap) => {
        const { container } = render(<Flex gap={gap} direction="column">Test</Flex>);
        expect(container.firstChild).toHaveClass(`gap${gap}`);
    });

    it('applies custom className', () => {
        const { container } = render(<Flex className="custom" direction="column">Test</Flex>);
        expect(container.firstChild).toHaveClass('custom');
    });

    it('applies max class if max prop is true', () => {
        const { container } = render(<Flex max direction="column">Test</Flex>);
        expect(container.firstChild).toHaveClass('max');
    });
});
