import createExtraReducer from "./extraReducers/extraReducers";
import { actions } from "./slice";
import * as ExtraReducers from "./extraReducers/extraReducers";
/**
 * Export the actions of the home page root slice.
 */
export const rootAction = { ...actions, ...ExtraReducers };
