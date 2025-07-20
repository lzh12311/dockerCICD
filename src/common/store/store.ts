import * as ReduxTools from '@reduxjs/toolkit';
import * as Redux from 'react-redux';
import { rootReducer } from './slice/root/slice';

const store = ReduxTools.configureStore({
    reducer: {
        root: rootReducer
    }
})
type Type = typeof store;

type Dispatch = typeof store.dispatch;

type State = ReturnType<typeof store.getState>;

const useDispatch: () => Dispatch = Redux.useDispatch;

const useSelector: Redux.TypedUseSelectorHook<State> = Redux.useSelector;

export default store;

export type { Type, Dispatch, State };

export { useDispatch, useSelector };

export * from "./states"

export * from "./actions"