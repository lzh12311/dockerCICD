import * as React from "react";
import { JSX } from "react";

import { Provider } from "react-redux";
import store from "./store/store";
import Content from "./component/content";

const Login: React.FC = () => {

    // React.useEffect(() => {
    //     Navigator.register(navigate);
    //     dispatch(AppStore.rootAction.onInitAsync(loginedCallback))
    // }, [])
    const build = (): JSX.Element => {

        return (
            
            <Provider store={store}>
                <Content />
            </Provider>

        )
    }
    return build();
}

export default Login;
