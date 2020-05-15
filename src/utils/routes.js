import React from "react";

import HomePage from "../pages/HomePage";
import AccountPage from "../pages/AccountPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import PageNotFound from "../pages/PageNotFound";

export const routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: "/account",
    exact: false,
    main: () => <AccountPage />,
  },
  {
    path: "/signin",
    exact: false,
    main: () => <SignInPage />,
  },
  {
    path: "/signup",
    exact: false,
    main: () => <SignUpPage />,
  },
  {
    path: "",
    exact: false,
    main: () => <PageNotFound />,
  },
];
