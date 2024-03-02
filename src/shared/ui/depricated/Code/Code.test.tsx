import { render, fireEvent } from '@testing-library/react';
import { Code } from './Code';

describe('Code component', () => {
    test('renders code and copy button', () => {
        const text = 'const greeting = "Hello, World!";';
        const { getByText, getByTestId } = render(<Code text={text} />);

        const codeElement = getByText(text);
        expect(codeElement).toBeInTheDocument();

        const copyButton = getByTestId('copy-button');
        expect(copyButton).toBeInTheDocument();
    });

    test('copies text to clipboard when copy button is clicked', () => {
        const text = 'const greeting = "Hello, World!";';
        const { getByTestId } = render(<Code text={text} />);

        const copyTextMock = jest.fn();
        Object.assign(navigator, {
            clipboard: {
                writeText: copyTextMock,
            },
        });

        const copyButton = getByTestId('copy-button');
        fireEvent.click(copyButton);

        expect(copyTextMock).toHaveBeenCalledWith(text);
    });
});
