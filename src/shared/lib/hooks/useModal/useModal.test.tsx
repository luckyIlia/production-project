import { act, renderHook } from '@testing-library/react';
import { useModal } from './useModal';

describe('useModal hook', () => {
    it('should set isMounted to true when isOpen is true', () => {
        const { result, rerender } = renderHook(() =>
            useModal({ animationDelay: 300, isOpen: true })
        );

        expect(result.current.isMounted).toBe(true);

        rerender({ isOpen: false });

        expect(result.current.isMounted).toBe(false);
    });

    it('should call onClose when close is invoked', () => {
        const onClose = jest.fn();
        const { result } = renderHook(() =>
            useModal({ animationDelay: 300, isOpen: true, onClose })
        );

        act(() => {
            result.current.close();
        });

        expect(onClose).toHaveBeenCalled();
    });

    it('should set isClosing to true when close is invoked', () => {
        const { result } = renderHook(() =>
            useModal({ animationDelay: 300, isOpen: true })
        );

        act(() => {
            result.current.close();
        });

        expect(result.current.isClosing).toBe(true);
    });

    it('should set isClosing to false after animation delay', async () => {
        jest.useFakeTimers();

        const { result } = renderHook(() =>
            useModal({ animationDelay: 300, isOpen: true })
        );

        act(() => {
            result.current.close();
        });

        expect(result.current.isClosing).toBe(true);

        jest.advanceTimersByTime(300);

        expect(result.current.isClosing).toBe(false);

        jest.useRealTimers();
    });

    it('should remove event listener on cleanup', () => {
        const removeEventListener = jest.spyOn(window, 'removeEventListener');

        const { result, unmount } = renderHook(() =>
            useModal({ animationDelay: 300, isOpen: true })
        );

        unmount();

        expect(removeEventListener).toHaveBeenCalled();
    });
});
