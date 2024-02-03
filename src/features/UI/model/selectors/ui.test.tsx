import { configureStore } from '@reduxjs/toolkit';
import { getUIScroll, getUIScrollByPath } from './ui';

describe('Selectors', () => {
    let initialState: { ui: any; };

    beforeEach(() => {
        initialState = {
            ui: {
                scroll: {
                    'some/path': 100,
                    'another/path': 200,
                },
            },
        };
    });

    it('should return UI scroll state', () => {
        const store = configureStore({ reducer: state => state });

        const selectedState = getUIScroll(store.getState());

        expect(selectedState).toEqual(initialState.ui.scroll);
    });

    it('should return UI scroll position by path', () => {
        const store = configureStore({ reducer: state => state });

        const path = 'some/path';
        const selectedPosition = getUIScrollByPath(store.getState(), path);

        expect(selectedPosition).toEqual(100);
    });

    it('should return 0 if path not found', () => {
        const store = configureStore({ reducer: state => state });

        const nonExistingPath = 'non/existing/path';
        const selectedPosition = getUIScrollByPath(store.getState(), nonExistingPath);

        expect(selectedPosition).toEqual(0);
    });
});
