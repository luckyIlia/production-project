import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Modal } from './Modal';

describe('Modal component', () => {
    it('renders modal when isOpen is true', () => {
        const { getByTestId } = render(
            <Modal isOpen data-testid="modal">
            <div>Modal Content</div>
        </Modal>
    );
        const modalElement = getByTestId('modal');
        expect(modalElement).toBeInTheDocument();
    });

    it('does not render modal when isOpen is false', () => {
        const { queryByTestId } = render(
            <Modal isOpen={false} data-testid="modal">
            <div>Modal Content</div>
        </Modal>
    );
        const modalElement = queryByTestId('modal');
        expect(modalElement).not.toBeInTheDocument();
    });

    it('calls onClose when Overlay is clicked', () => {
        const onCloseMock = jest.fn();
        const { getByTestId } = render(
            <Modal isOpen onClose={onCloseMock} data-testid="modal">
            <div>Modal Content</div>
        </Modal>
    );
        const overlay = getByTestId('overlay');
        fireEvent.click(overlay);
        expect(onCloseMock).toHaveBeenCalled();
    });

});
