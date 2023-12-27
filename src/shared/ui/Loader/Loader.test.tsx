import { render } from '@testing-library/react';
import { Loader } from './Loader';

describe('Loader Component', () => {
    it('renders Loader component with default classNames', () => {
        const { container } = render(<Loader />);
        const loaderElement = container.querySelector('.lds-ellipsis');
        expect(loaderElement).toBeInTheDocument();
        expect(loaderElement?.childNodes.length).toBe(4);
    });

    it('renders Loader component with custom className', () => {
        const customClassName = 'custom-loader-class';
        const { container } = render(<Loader className={customClassName} />);
        const loaderElement = container.querySelector('.lds-ellipsis');
        expect(loaderElement).toBeInTheDocument();
        expect(loaderElement?.classList.contains(customClassName)).toBe(true);
        expect(loaderElement?.childNodes.length).toBe(4);
    });
});
