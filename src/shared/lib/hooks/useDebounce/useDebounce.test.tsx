import { act, renderHook } from '@testing-library/react';
import { useDebounce } from './useDebounce';

describe('useDebounce', () => {
    jest.useFakeTimers();

    it('should debounce the callback function', () => {
        const callback = jest.fn();
        const delay = 1000;
        const { result } = renderHook(() => useDebounce(callback, delay));

        act(() => {
            result.current();
            result.current();
            result.current();
        });

        jest.advanceTimersByTime(delay - 1);

        expect(callback).not.toBeCalled();

        jest.advanceTimersByTime(1);

        expect(callback).toBeCalledTimes(1);
    });

    it('should debounce with the latest arguments', () => {
        const callback = jest.fn();
        const delay = 1000;
        const { result } = renderHook(() => useDebounce(callback, delay));

        act(() => {
            result.current('a');
            result.current('b');
        });

        jest.advanceTimersByTime(delay);

        expect(callback).toBeCalledWith('b');
    });

    it('should clear the timer on unmount', () => {
        const callback = jest.fn();
        const delay = 1000;
        const { result, unmount } = renderHook(() => useDebounce(callback, delay));

        act(() => {
            result.current();
        });

        unmount();

        jest.runAllTimers();

        expect(callback).not.toBeCalled();
    });
});
