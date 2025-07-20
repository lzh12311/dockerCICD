import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { SearchResult } from "../states";
import * as Builder from "./thunk/builder";

const createExtraReducer = (builder: ActionReducerMapBuilder<SearchResult>): void=>{
    Builder.buildSearchAsync(builder);
};

export default createExtraReducer;

export * from "./thunk/thunk";

