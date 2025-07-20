import * as ReduxTools from "@reduxjs/toolkit";
import * as Redux from "react-redux";
import { rootReducer } from "./slices/root/slice";

const store = ReduxTools.configureStore({
    reducer:{
        root: rootReducer,
    }
})

type Dispatch = typeof store.dispatch;
/**
 * The create model root state type;
 */
type State = ReturnType<typeof store.getState>;

/**
 * The function that gets the create model page dispatch function.
 */
const useDispatch: () => Dispatch = Redux.useDispatch;

/**
 * The function that use a specific selector to get the corresponding slice of the create model page state.
 */
const useSelector: Redux.TypedUseSelectorHook<State> = Redux.useSelector;

export default store;

export type { Dispatch, State };

export { useDispatch, useSelector };

export * from "./state";

export * from "./actions";