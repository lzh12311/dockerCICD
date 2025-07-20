import { createSlice } from "@reduxjs/toolkit";
import { RootEmptyState, RootState } from "./states";
import createExtraReducers from "./extraReducer/extroReducers";



const initialState : RootState = RootEmptyState();

const slice = createSlice({
    name: "root",
    initialState,
    reducers: {
    },
    extraReducers: createExtraReducers
})


const actions = slice.actions;

const rootReducer = slice.reducer;

export {actions,rootReducer};