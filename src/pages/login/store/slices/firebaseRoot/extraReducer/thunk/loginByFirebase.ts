import { FirebaseUser } from "../../../../../../../common/clients/authentication/firebase"
import * as Firebase from "../../../../../../../common/clients/authentication";
import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import * as Store from "../../../../store"

const key = "loginWithFirebase"

type LoginProps = {
    email: string,
    password: string
}

type LoginResult = {
    uid: string,
    displayName: string,
    alias: string,
    email: string
}
const buildLoginWithFirebase = (builder: ActionReducerMapBuilder<Store.FirebaseLoginState>) => {
    builder
        .addCase(loginWithFirebase.pending, (state, aciton) => {
            console.log("pendingf")
        })
        .addCase(loginWithFirebase.fulfilled, (state, action) => {
            console.log("has completed")
            console.log(action.payload)
        })
        .addCase(loginWithFirebase.rejected, () => {
            console.log("authentication failed")
        })
}

const loginWithFirebase = createAsyncThunk(key, async (props: LoginProps, thunkMethods): Promise<LoginResult> => {
    const user = (await Firebase.loginWithEmailAndPassword(props.email, props.password));
    console.log(user)
    return {
        uid: user.uid,
        displayName: user.displayName ?? "",
        alias: user.emailVerified ? "true" : "false",
        email: user.email ?? ""
    };
})

export { loginWithFirebase, buildLoginWithFirebase };