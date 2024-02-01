import { bindActionCreators, createSlice } from '@reduxjs/toolkit';
import { CreateSliceOptions, SliceCaseReducers } from '@reduxjs/toolkit/dist';
import { useDispatch } from 'react-redux';
import { useMemo } from 'react';

export function buildSlice<
    State,
    CaseReducers extends SliceCaseReducers<State>,
    Name extends string = string,
    >(options: CreateSliceOptions<State, CaseReducers, Name>) {
    const slice = createSlice(options);

    const useActions = () => {
        const dispatch = useDispatch();
        return useMemo(
            () => bindActionCreators(slice.actions as any, dispatch),
            [dispatch],
        );
    };

    return {
        ...slice,
        useActions,
    };
}

// Example usage
interface CounterState {
    count: number;
}

const initialState: CounterState = {
    count: 0,
};

const counterSlice = buildSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state: CounterState) => {
            state.count += 1;
        },
        decrement: (state: CounterState) => {
            state.count -= 1;
        },
    },
});

export const { reducer, actions } = counterSlice;
export const useCounterActions = counterSlice.useActions;
