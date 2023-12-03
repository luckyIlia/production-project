import { render, fireEvent } from '@testing-library/react';
import { DrawerContent } from './Drawer';

describe('DrawerContent component', () => {
    it('should render correctly when isOpen is true', () => {
        const onCloseMock = jest.fn();
        const { getByText } = render(
            <DrawerContent isOpen onClose={onCloseMock}>
            <div>Drawer content</div>
        </DrawerContent>
    );

        expect(getByText('Drawer content')).toBeInTheDocument();
    });

    it('should not render when isOpen is false', () => {
        const { queryByText } = render(
            <DrawerContent isOpen={false}>
                <div>Drawer content</div>
        </DrawerContent>
    );

        expect(queryByText('Drawer content')).not.toBeInTheDocument();
    });

    it('should call onClose when Overlay is clicked', () => {
        const onCloseMock = jest.fn();
        const { getByTestId } = render(
            <DrawerContent isOpen onClose={onCloseMock}>
            <div>Drawer content</div>
        </DrawerContent>
    );

        fireEvent.click(getByTestId('overlay'));
        expect(onCloseMock).toHaveBeenCalledTimes(1);
    });

    // Add more test cases for specific functionality and edge cases as needed
});
