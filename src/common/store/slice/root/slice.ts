import { createSlice } from "@reduxjs/toolkit";
import { RootEmptyState, UserState } from "./states";
import createExtraReducer from "./extraReducer/extraReducers";
import * as Reducers from "./reducer/reducers";
const initialState: UserState = RootEmptyState();

const slice = createSlice({
    name: "authentication",
    initialState,
    reducers: {
        updateUserInfo: Reducers.onUpdateUserInfo
    },
    extraReducers: createExtraReducer
})


const actions = slice.actions;

const rootReducer = slice.reducer;

export { actions, rootReducer }
