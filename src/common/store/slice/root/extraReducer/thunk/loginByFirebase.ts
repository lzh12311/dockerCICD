import { FirebaseUser } from "../../../../../clients/authentication/firebase"
import * as Firebase from "../../../../../clients/authentication";
import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import * as Store from "../../../../store"

const key = "loginWithFirebase"

type LoginProps = {
    email: string,
    password: string
}


const buildLoginWithFirebaseAsync = (builder: ActionReducerMapBuilder<Store.UserState>): void => {
    builder
        .addCase(loginWithFirebase.pending, state => {
            console.log("start login")

        })
        .addCase(loginWithFirebase.fulfilled, (state, action) => {
            state.user!.displayName = action.payload.displayName || "";
            state.user!.alias = action.payload.email || ""
            console.log("completed login")

        })
        .addCase(loginWithFirebase.rejected, (state, aciton) => {
            console.log("finish the login")
        })
}


const loginWithFirebase = createAsyncThunk(key, async (props: LoginProps, thunkMethods): Promise<FirebaseUser> => {
    const user = await Firebase.loginWithEmailAndPassword(props.email, props.password);
    return user;
})

export { buildLoginWithFirebaseAsync, loginWithFirebase }