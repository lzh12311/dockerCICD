import React, { JSX } from "react"
import * as PageStore from "../store/store";

const Content = (): JSX.Element => {
    const dispatch = PageStore.useDispatch();
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState("");
    const loginMethod = (email: string, password: string) => {
        dispatch(PageStore.firebaseAction.loginWithFirebase({ email, password }));
    }

    return (
        <div>
            <input type="text" placeholder="输入邮箱" onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="输入密码" onChange={e => setPassword(e.target.value)} />
            <button onClick={() => loginMethod(email, password)}>确认登陆</button>
        </div>
    )

}

export default Content;