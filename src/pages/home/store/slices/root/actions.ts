import { actions } from "./slice";

import * as ExtraReducers from "./extraReducer/extroReducers"

export const rootAction = {...actions, ...ExtraReducers};

