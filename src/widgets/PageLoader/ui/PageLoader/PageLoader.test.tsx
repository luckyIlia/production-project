import React from 'react';
import { render } from '@testing-library/react';
import { PageLoader } from './PageLoader';

describe('PageLoader component', () => {
    it('renders with default props', () => {
        const { container } = render(<PageLoader />);
        const pageLoaderElement = container.querySelector('.PageLoader');
        expect(pageLoaderElement).toBeInTheDocument();
    });

    it('renders with custom className', () => {
        const { container } = render(<PageLoader className="customClass" />);
        const pageLoaderElement = container.querySelector('.PageLoader');
        expect(pageLoaderElement).toHaveClass('customClass');
    });
});
