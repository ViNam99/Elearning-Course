import React, { useEffect } from "react";
import "./assets/styles/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import UserLayout from "./layout/UserLayout";
import HomePage from "./pages/HomePage";
import SignUpInLayout from "./layout/SignUpInLayout";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import PageNotFound from "./pages/PageNotFound";
import { CREDENTIAL_TYPE } from "./constants/userConstants";
import jwtDecode  from 'jwt-decode';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const credentialToken = JSON.parse(localStorage.getItem("credentials"));
    if (credentialToken) {
      const dataDecode = jwtDecode(credentialToken);      
      dispatch({
        type: CREDENTIAL_TYPE.FETCH_CREDENTIAL_SUCCESS,
        data: dataDecode,
      });
    }
  }, [dispatch]);
  return (
    <Router>
      <Switch>
        <SignUpInLayout path="/signin">
          <Route path="/signin" component={SignInPage} />
        </SignUpInLayout>
        <SignUpInLayout path="/signup">
          <Route path="/signup" component={SignUpPage} />
        </SignUpInLayout>
        <UserLayout exact path="/">
          <Switch>
            <Route path="/" component={HomePage} />
          </Switch>
        </UserLayout>
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default App;
