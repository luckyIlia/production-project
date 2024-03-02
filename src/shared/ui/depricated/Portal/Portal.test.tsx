import { createPortal, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { render as renderTestingLibrary } from '@testing-library/react';
import { Portal } from './Portal';

const PortalWrapper = ({ children }: { children: React.ReactNode }) => {
    const container = document.createElement('div');
    return createPortal(children, container);
};

describe('Portal', () => {
    let container: HTMLDivElement | null = null;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        if (container) {
            unmountComponentAtNode(container);
            container.remove();
        }
    });

    it('renders children into the portal', () => {
        act(() => {
            renderTestingLibrary(<PortalWrapper><Portal>Test Content</Portal></PortalWrapper>);
        });

        expect(container?.textContent).toBe('Test Content');
    });

    it('renders into specified element', () => {
        const targetElement = document.createElement('div');
        document.body.appendChild(targetElement);

        act(() => {
            renderTestingLibrary(<PortalWrapper><Portal element={targetElement}>Test Content</Portal></PortalWrapper>);
        });

        expect(targetElement.textContent).toBe('Test Content');
    });

    it('renders children into the default body element if no element is provided', () => {
        act(() => {
            renderTestingLibrary(<PortalWrapper><Portal>Test Content</Portal></PortalWrapper>);
        });

        expect(document.body.textContent).toBe('Test Content');
    });
});
