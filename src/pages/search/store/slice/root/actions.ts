import { actions } from "./slice";
import * as ExtraReducer from "./extraReducer/extraReducers";


export const rootActions = { ...actions, ...ExtraReducer };
