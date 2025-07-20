import * as React from "react";
import { JSX } from "react";
import * as Dom from "react-router-dom";

import * as Redux from "react-redux";
import HomePageContent from "./component/homePage"; 
import store from "./store/store";
import { Navigator } from "../../common/router/navigtor";
import { PageContext } from "common/model/context";
import Page from "common/component/page";

const HomePage: React.FC = () => {
    const navigate = Dom.useNavigate();
    const location = Dom.useLocation();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    React.useEffect(() => {
        // eslint-disable-next-line
        Navigator.register(navigate)
    }, [location])

    
    const build = (): JSX.Element => {
        return (
            // <Redux.Provider store={store}>
            //     <HomePageContent />
            // </Redux.Provider>
            <Page
            build={buildWithContext}
            title="home"
            user="homeUser"
            />
        )
    }
     /**
   * The builder of the content of the component with context.
   * @param context The context of the page.
   * @returns The content of the component.
   */
  const buildWithContext = (context: React.Context<PageContext>): JSX.Element => {
    return (
      <Redux.Provider store={store}>
        <HomePageContent context={context}/>
      </Redux.Provider>
    );
  };
    return build();
}

export default HomePage;
