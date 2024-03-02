import { render } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('Avatar component', () => {
    it('renders with default props', () => {
        const { container } = render(<Avatar />);
        const avatarElement = container.firstChild;

        expect(avatarElement).toBeInTheDocument();
    });

    it('renders with provided src and alt', () => {
        const mockSrc = 'path/to/image.png';
        const mockAlt = 'Sample alt text';
        const { getByAltText } = render(<Avatar src={mockSrc} alt={mockAlt} />);

        const imageElement = getByAltText(mockAlt);
        expect(imageElement).toBeInTheDocument();
        expect(imageElement).toHaveAttribute('src', mockSrc);
    });

});
