import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { LoginState } from "../states";
import * as Builder from "./thunks/builder";


const createExtraReducer = (builder: ActionReducerMapBuilder<LoginState>): void => {
    Builder.buildLoginAsync(builder);
}

export default createExtraReducer;
