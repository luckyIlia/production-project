import { render } from '@testing-library/react';
import { AnimationProvider, useAnimationLibs } from './AnimationProvider';

// Mocked implementations of @react-spring/web and @use-gesture/react
const mockSpring = {
    // mocked spring functions...
};

const mockGesture = {
    // mocked gesture functions...
};

jest.mock('@react-spring/web', () => ({
    __esModule: true,
    ...mockSpring,
}));

jest.mock('@use-gesture/react', () => ({
    __esModule: true,
    ...mockGesture,
}));

const ChildComponent = () => {
    const { Gesture, Spring, isLoaded } = useAnimationLibs();

    return (
        <div>
            <p>Gesture is loaded: {String(!!Gesture)}</p>
            <p>Spring is loaded: {String(!!Spring)}</p>
        </div>
    );
};

describe('AnimationProvider', () => {
    it('should render children', () => {
        const { getByText } = render(
            <AnimationProvider>
                <div>Test Child</div>
            </AnimationProvider>
        );
        expect(getByText('Test Child')).toBeInTheDocument();
    });

    it('should provide animation libraries through context', async () => {
        const { getByText } = render(
            <AnimationProvider>
                <ChildComponent />
            </AnimationProvider>
        );

        expect(getByText('Gesture is loaded: true')).toBeInTheDocument();
        expect(getByText('Spring is loaded: true')).toBeInTheDocument();
    });
});


