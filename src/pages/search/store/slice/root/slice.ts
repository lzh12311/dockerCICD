import { createSlice } from "@reduxjs/toolkit";
import { searchEmptyData } from "./states";
import createExtraReducer from "./extraReducer/extraReducers";

const slice = createSlice({
    name: "search",
    initialState: searchEmptyData,
    reducers: {

    },
    extraReducers: createExtraReducer

})

const actions = slice.actions;


const rootReducer = slice.reducer;

export { actions, rootReducer };
