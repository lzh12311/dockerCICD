import { PageContext } from "common/model/context";
import * as React from "react";
import * as Dom from "react-router-dom";
import * as AppStore from "common/store/store";
import { NavigationKeys, Navigator } from "common/router/navigtor";

type PageProps = {

    build: (context:React.Context<PageContext>) => React.ReactNode;

    title: string;
    user: string;
}

const Page = React.forwardRef<PageContext, PageProps>((props, ref) => {
    const location = Dom.useLocation();
    const dispatch = AppStore.useDispatch();
    const displayName = AppStore.useSelector(state => state.root.user?.displayName);
    const alias = AppStore.useSelector(state => state.root.user?.alias);
    const navigate = Dom.useNavigate();

    React.useEffect(() => init(), [location]);

    const contextValue: PageContext = {
        age: 1,
        title: props.title,
        user: props.user

    }
    const context = React.createContext<PageContext>(contextValue);

    const init = (): void => {
        Navigator.register(navigate);
    }
    return ( 
        <context.Provider value={contextValue}>
            {props.build(context)};
        </context.Provider>
    )
})

export default Page;