import { actions } from "./slice";
import * as ExtraReducers from './extraReducer/extraReducer';

export const firebaseAction = { ...actions, ...ExtraReducers }

