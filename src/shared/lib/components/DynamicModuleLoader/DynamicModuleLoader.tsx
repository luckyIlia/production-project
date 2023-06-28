import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { FC, useEffect } from 'react';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';
import cls from './DynamicModuleLoader.module.scss';

interface DynamicModuleLoaderProps {
    key: StateSchemaKey;
    reducer: Reducer;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const { children, key, reducer } = props;
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();
    useEffect(() => {
        store.reducerManager.add(key, reducer);
        dispatch({ type: `@INIT ${key} reducer` });
        return () => {
            store.reducerManager.remove(key);
            dispatch({ type: `@DESTROY ${key} reducer` });
        };
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {children}
        </>
    );
};
