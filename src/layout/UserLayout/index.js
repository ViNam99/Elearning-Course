import React from "react";
import Header from "../HeaderDefault";
import Footer from "../FooterDefault";

const UserLayout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default UserLayout;
