import * as Authentication from "../../../../../clients/authentication";
import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import * as Store from "../../../../store"
import * as Firebase from "../../../../../clients/authentication/firebase";

const key = "firebaseLogin"

const buildOnInitAsync = (builder: ActionReducerMapBuilder<Store.UserState>): void => {
    builder
        .addCase(onInitAsync.pending, (state, action) => {
            console.log("still authentication")
        })
        .addCase(onInitAsync.fulfilled, (state, action) => {
            console.log("JZ: Other authentication initialization is in progress or has completed, skip this one.");
        })
}


const onInitAsync = createAsyncThunk(key, async (onLogin: (user: Firebase.FirebaseUser) => void): Promise<void> => {
    const currentUser = Authentication.subscribeAuthentication(user=>onLogin(user), () => {
        console.log("we logged out")
    })
    console.log(currentUser + "current")
})

export { buildOnInitAsync, onInitAsync };

