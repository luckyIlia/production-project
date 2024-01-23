import { act, renderHook } from '@testing-library/react';
import { useHover, UseHoverResult  } from './useHover';

describe('useHover', () => {
    it('should initialize with hover state as false', () => {
        const { result } = renderHook(() => useHover());
        const [isHover] = result.current as UseHoverResult;
        expect(isHover).toBe(false);
    });

    it('should set hover state to true on mouse enter', () => {
        const { result } = renderHook(() => useHover());
        const [, { onMouseEnter }] = result.current as UseHoverResult;

        act(() => {
            onMouseEnter();
        });

        const [isHover] = result.current as UseHoverResult;
        expect(isHover).toBe(true);
    });

    it('should set hover state to false on mouse leave', () => {
        const { result } = renderHook(() => useHover());
        const [, { onMouseLeave }] = result.current as UseHoverResult;

        act(() => {
            onMouseLeave();
        });

        const [isHover] = result.current as UseHoverResult;
        expect(isHover).toBe(false);
    });
});
