import React from 'react';
import ReactDOM from 'react-dom/client';
import * as Dom from "react-router-dom";
import './index.css';
import * as Apollo from "@apollo/client";

import reportWebVitals from './reportWebVitals';
import AppRouter from './common/router/router';
import store from 'common/store/store';
import AppContainer from 'common/component/appContainer';
import client from 'common/clients/external/apollo';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Apollo.ApolloProvider client={client}>
    <AppContainer store={store}>
      <Dom.BrowserRouter>
        <AppRouter />
      </Dom.BrowserRouter>
    </AppContainer>
    </Apollo.ApolloProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
