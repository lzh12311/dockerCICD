import * as ReduxTools from "@reduxjs/toolkit"
import * as Redux from "react-redux";

import { rootReducer } from "./slices/root/slice";
import { firebaseReducer } from "./slices/firebaseRoot/slice";

const store = ReduxTools.configureStore({
    reducer:{
        root: rootReducer,
        firebase: firebaseReducer
    }
})

type Dispatch = typeof store.dispatch;

type State = ReturnType<typeof store.getState>;

const useDispatch: ()=> Dispatch= Redux.useDispatch;

const useSelector: Redux.TypedUseSelectorHook<State> = Redux.useSelector;

export default store;

export type { Dispatch, State };

export { useDispatch, useSelector }; 

export * from "./state";

export * from "./actions";
