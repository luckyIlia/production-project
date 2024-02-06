import { act, renderHook } from '@testing-library/react';
import { useTheme } from './useTheme';
import { Theme } from '../../../const/theme';
// eslint-disable-next-line luckyilia-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/ThemeProvider';

describe('useTheme', () => {
    it('should toggle themes correctly', () => {
        const { result } = renderHook(() => useTheme(), {
            wrapper: ThemeProvider,
        });

        expect(result.current.theme).toBe(Theme.LIGHT);
        act(() => {
            result.current.toggleTheme();
        });
        expect(result.current.theme).toBe(Theme.ORANGE);
        act(() => {
            result.current.toggleTheme();
        });
        expect(result.current.theme).toBe(Theme.DARK);
    });
});
