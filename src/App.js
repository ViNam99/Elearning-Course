import React from "react";
import "./assets/styles/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import UserLayout from "./layout/UserLayout";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Router>
      <Switch>
        <UserLayout path="/">
          <Switch>
            <Route path="/" component={HomePage} />
          </Switch>
        </UserLayout>
      </Switch>
    </Router>
  );
};

export default App;
