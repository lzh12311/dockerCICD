import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { FirebaseLoginState } from "../states";
import * as Builder from "./thunk/builders";

const createExtraReducer = (builder: ActionReducerMapBuilder<FirebaseLoginState>): void => {
    Builder.buildLoginWithFirebase(builder);
}

export default createExtraReducer;

export * from './thunk/thunks';
