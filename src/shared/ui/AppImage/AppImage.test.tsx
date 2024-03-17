import { render } from '@testing-library/react';
import { AppImage } from './AppImage';

describe('AppImage component', () => {
    const testSrc = 'test-image.jpg';
    const testAlt = 'Test image';
    const testClassName = 'test-class';

    it('renders with provided src and alt attributes', () => {
        const { getByAltText } = render(
            <AppImage src={testSrc} alt={testAlt} />
        );
        const imageElement = getByAltText(testAlt);
        expect(imageElement).toBeInTheDocument();
        expect(imageElement).toHaveAttribute('src', testSrc);
    });

    it('renders with additional className', () => {
        const { container } = render(
            <AppImage src={testSrc} alt={testAlt} className={testClassName} />
        );
        const imageElement = container.querySelector('img');
        expect(imageElement).toHaveClass(testClassName);
    });

});
