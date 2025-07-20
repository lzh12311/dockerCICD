import { createSlice } from "@reduxjs/toolkit";
import { RootEmptyState } from "./states";
import createExtraReducer from "./extraReducer/extraReducer"

const slice = createSlice({
    name:"firebase",
    initialState: RootEmptyState,
    reducers:{
        
    },
    extraReducers: createExtraReducer
})


const actions = slice.actions;

const firebaseReducer = slice.reducer;

export {actions, firebaseReducer}
