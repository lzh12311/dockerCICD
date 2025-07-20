import { State } from "./store";
import * as States from "./states";

/**
 * The selector of the authentication slice.
 * @param state The root state of the store.
 * @returns The authentication slice in the root state.
 */
const authenticationSelector = (state: State): States.UserState => state.root;



export { authenticationSelector }