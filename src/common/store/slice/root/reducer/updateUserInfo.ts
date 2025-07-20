
import { UserState } from '../states';
type UserInfo = {
    displayName: string,
    alias: string,

}

/**
 * The update the current processing authentication provider action type.
 */
type UpdateUserInfoAction = {
    /**
     * The type of the action.
     */
    type: string;

    /**
     * The payload of the action.
     */
    payload: {
        /**
         * The new value of the current processing authentication provider.
         */
        newValue: string
    };
}

/**
 * The reducer for the update the current processing authentication provider action.
 */
const onUpdateUserInfo = (state: UserState, action: UpdateUserInfoAction): UserState | void => {
    console.log("see here see here seehere")
    const user: UserInfo = {
        displayName: "",
        alias: ""
    }
    state.user = user;
    state.user.displayName = action.payload.newValue ?? "not decided";
};

export { onUpdateUserInfo };
