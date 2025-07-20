import * as React from "react";
import { JSX } from "react";
import * as Dom from "react-router-dom";

import * as AppStore from "../../common/store/store"
import { Provider } from "react-redux";
import store from "./store/store";
import Content from "./component/content";
import { Navigator } from "../../common/router/navigtor";

const Login: React.FC = () => {
    const dispatch = AppStore.useDispatch();
    const navigate = Dom.useNavigate();

    // React.useEffect(() => {
    //     Navigator.register(navigate);
    //     dispatch(AppStore.rootAction.onInitAsync(loginedCallback))
    // }, [])
    const loginedCallback =(user:any):void=>{
        console.log(user+"useruseruser")
    }
    console.log()
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
