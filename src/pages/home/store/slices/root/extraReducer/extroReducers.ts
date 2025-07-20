import { ActionReducerMapBuilder } from "@reduxjs/toolkit";

import * as Builder from "./thunks/builders";
import { RootState } from "../states";

const createExtraReducers = (builder:ActionReducerMapBuilder<RootState>) :void =>{
    Builder.buildGetProductsAsync(builder);
}

export default createExtraReducers;

export * from "./thunks/thunks"