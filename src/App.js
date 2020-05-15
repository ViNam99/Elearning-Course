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
import AccountPage from "./pages/AccountPage";
import { setAuthorization } from "./utils/axios";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const credentialInfo = JSON.parse(localStorage.getItem("credentials"));
    if (credentialInfo) {
      setAuthorization(credentialInfo.accessToken);
      dispatch({
        type: CREDENTIAL_TYPE.FETCH_CREDENTIAL_SUCCESS,
        data: credentialInfo,
      });
    }
  }, []);
  return (
    <Router>
      <Switch>
        <SignUpInLayout path="/signin">
          <Route path="/signin" component={SignInPage} />
        </SignUpInLayout>
        <SignUpInLayout path="/signup">
          <Route path="/signup" component={SignUpPage} />
        </SignUpInLayout>
        <UserLayout path="/">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/account" component={AccountPage} />
          </Switch>
        </UserLayout>
        <Route path="" component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default App;
