import { createSlice } from "@reduxjs/toolkit";
import { LoginState, LoginStateEmptyState } from "./states";


const initialState: LoginState = LoginStateEmptyState();


const slice = createSlice({
    name: "login",
    initialState,
    reducers: {
    },
    
})

const actions = slice.actions;

const rootReducer = slice.reducer;

export { actions, rootReducer };
