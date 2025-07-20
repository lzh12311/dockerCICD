import * as React from "react";
import * as Dom from "react-router-dom";
import { NavigationKeys } from "./navigtor";
import Node from "./node";

const Login = React.lazy(() => import("../../pages/login"));
const Home = React.lazy(() => import("../../pages/home"));
const Cart = React.lazy(() => import("../../pages/cart"));
const Search = React.lazy(() => import("../../pages/search"));


const homeTitle = "this is home";
const searchTitle = "this is search";
const loginTitle = "this is login";
const cartTilte = "this is cart";

const AppRouter = (): React.JSX.Element => {
    return (
        <Dom.Routes>
            <Dom.Route path={"/"} element={<Node title={homeTitle} path={NavigationKeys.search} Component={Search} />} />
            <Dom.Route path={NavigationKeys.home} element={<Node title={homeTitle} path={NavigationKeys.home} Component={Home} />} />
            <Dom.Route path={NavigationKeys.cart} element={<Node title={cartTilte} path={NavigationKeys.cart} Component={Cart} />} />
            <Dom.Route path={NavigationKeys.login} element={<Node title={loginTitle} path={NavigationKeys.login} Component={Login} />} />
            <Dom.Route path={NavigationKeys.search} element={<Node title={searchTitle} path={NavigationKeys.productDetail} Component={Search} />} />
        </Dom.Routes>
    )
}
export default AppRouter;