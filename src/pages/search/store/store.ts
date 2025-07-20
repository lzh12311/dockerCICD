import { configureStore } from "@reduxjs/toolkit";
import * as Redux from "react-redux";
import { rootReducer } from "./slice/root/slice";


const store = configureStore({
    reducer: {
        root: rootReducer
    }
})

type Dispatch = typeof store.dispatch;

type State = ReturnType<typeof store.getState>;

const useDispatch: () => Dispatch = Redux.useDispatch;

const useSelector: Redux.TypedUseSelectorHook<State> = Redux.useSelector;

export * from "./states";

export * from "./actions";

export default store;

export { useSelector, useDispatch };