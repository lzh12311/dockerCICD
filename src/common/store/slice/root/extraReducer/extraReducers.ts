import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import * as Builder from "./thunk/builder";
import { UserState } from "../states";

const createExtraReducer = (builder: ActionReducerMapBuilder<UserState>): void => {
    Builder.buildLoginWithFirebaseAsync(builder);
    Builder.buildOnInitAsync(builder);
}

export default createExtraReducer;

export * from './thunk/thunk';
