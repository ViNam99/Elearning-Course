/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./assets/styles/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CREDENTIAL_TYPE } from "./constants/userConstants";

import { setAuthorization } from "./utils/axios";
import { routes } from "./utils/routes";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const credentialInfo = JSON.parse(localStorage.getItem("credentials"));
    if (credentialInfo) {
      setAuthorization(credentialInfo.accessToken);
      dispatch({
        type: CREDENTIAL_TYPE.SIGNIN_CREDENTIAL_SUCCESS,
        data: credentialInfo,
      });
    }
  }, []);

  const showContentMenu = (routes) => {
    if (routes.length > 0) {
      return routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
  };
  return (
    <>
      <Router>
        <Switch>{showContentMenu(routes)}</Switch>
      </Router>
    </>
  );
};

export default App;
