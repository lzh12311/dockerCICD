import * as React from "react";
import * as Redux from "react-redux";

import AppFrame from "./appframe";
import * as Dom from "react-router-dom";

import * as  AppStore from "common/store/store"
import { Navigator } from "../../common/router/navigtor";
import { FirebaseUser } from "common/clients/authentication/firebase";
import * as UserWebSocket from "common/clients/websocket";

/**
 * The props type of the application container component.
 */
type AppContainerProps = {
  /**
   * The store of the application.
   */
  store: AppStore.Type;

  /**
   * Sub-element(s) of the application container component.
   */
  children: React.JSX.Element | React.JSX.Element[];
};



/**
 * Build the application container component.
 * @param props The props of the application container component.
 * @param props.store The store of the application.
 * @param props.children Sub-element(s) of the application container component.
 * @returns The application container component.
 */
const AppContainer: React.FC<AppContainerProps> = props => {
  // const dispatch = props.store.dispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(() => onInit(), []);
  // const navigate = Dom.useNavigate();

  const build = (): React.JSX.Element => {
    return (
      <Redux.Provider store={props.store}>
        <AppFrame>
          {props.children}
        </AppFrame>
      </Redux.Provider>
    )
  }

  const loginedCallback = (user: FirebaseUser): void => {
    console.log("we run we run we run")
    user.getIdToken();
    props.store.dispatch(AppStore.rootAction.updateUserInfo({ newValue: user.displayName??"not decided" }));

    // console.log(user + "useruseruser")
  }

  const onInit = (): void => {
    // Navigator.register(navigate);
    props.store.dispatch(AppStore.rootAction.onInitAsync(user=>loginedCallback(user)))
    UserWebSocket.createWebSocket();
  }


  return build();
};

export default AppContainer;
