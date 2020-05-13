import React from "react";
import "./assets/styles/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import UserLayout from "./layout/UserLayout";
import HomePage from "./pages/HomePage";
import SignUpInLayout from "./layout/SignUpInLayout";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
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
