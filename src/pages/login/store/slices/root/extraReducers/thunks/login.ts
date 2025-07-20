import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit"
import { ID } from "../../../../../../../common/component/models/scalars"
import userLogin from "../../../../../../../common/apis/login/login"
import * as Store from "../../../../store"

const key = "login"

type LoginProps = {
    userName: string,
    password: string
}

type LoginResult = {
    id: ID | undefined,
    username: string
}
const buildLoginAsync = (builder: ActionReducerMapBuilder<Store.LoginState>): void => {
    builder
        .addCase(loginAsync.pending, (state, actions) => {
            console.log("start to fectch login")
        })
        .addCase(loginAsync.fulfilled, (state, actions) => {
            state.id = actions.payload.id!;
            state.userName = actions.payload.username
        })
        .addCase(loginAsync.rejected,(state,action)=>{
            console.error("falied to login")
        })
}

const loginAsync = createAsyncThunk(key, async (props: LoginProps, thunkMethods): Promise<LoginResult> => {
    const result: LoginResult = {
        id: undefined,
        username: ""
    }

    const loginInfo = await userLogin({
        userName: props.userName,
        password: props.password
    });

    result.id = loginInfo.id
    result.username = loginInfo.userName

    return result;
})

export { buildLoginAsync, loginAsync };

