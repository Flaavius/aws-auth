import "./aws-config";

import { StrictMode } from "react";
import ReactDOM from 'react-dom';
import {
  Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { createBrowserHistory } from "history";
import App from "./App";

import './index.css';
import { IUserData, userManager } from "./userManager";

const history = createBrowserHistory();
history.listen(his => console.log(his));

const routes = [
  {
    id: 'homepage',
    exact: true,
    path: "/",
    component: App,
  },
  {
    exact: true,
    id: 'authToken',
    path: "/auth/token",
    render: () => {
      const params = new URLSearchParams(window.location.hash.substr(1));
      // @ts-ignore
      const userInfo: IUserData = {};
      params.forEach((val, key) => {
        console.log({ [key]: val });
        userInfo[key] = val;
      });

      userManager.setUser(userInfo);

      return <Redirect to="/" />;
    }
  },{
    id: '404NotFound',
    render: () => {
      return <h1> Not Found !!! </h1>
    }
  }
];

const Main = () => (
  <StrictMode>
    <Router history={history}>
        <Switch>
          {routes.map((route) => (<Route key={route.id} {...route}/>))}
        </Switch>
    </Router>
  </StrictMode>
);


ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
