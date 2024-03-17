import { render } from '@testing-library/react';
import { Skeleton } from './Skeleton';

describe('Skeleton Component', () => {
    it('renders with default props', () => {
        const { container } = render(<Skeleton />);
        const skeletonElement = container.firstChild;

        expect(skeletonElement).toBeInTheDocument();
        expect(skeletonElement).toHaveClass('Skeleton');
    });

    it('renders with provided height and width', () => {
        const { container } = render(<Skeleton height={100} width={200} />);
        const skeletonElement = container.firstChild;

        expect(skeletonElement).toHaveStyle('height: 100px');
        expect(skeletonElement).toHaveStyle('width: 200px');
    });

    it('renders with custom border radius', () => {
        const { container } = render(<Skeleton border="50%" />);
        const skeletonElement = container.firstChild;

        expect(skeletonElement).toHaveStyle('borderRadius: 50%');
    });

    it('renders with additional className', () => {
        const { container } = render(<Skeleton className="customClass" />);
        const skeletonElement = container.firstChild;

        expect(skeletonElement).toHaveClass('customClass');
    });
});
