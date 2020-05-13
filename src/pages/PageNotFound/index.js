import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const PageNotFound = () => {
  const prefix = "pageNotFound";
  return (
    <>
      <section className={prefix}>
        <Container>
          <NavLink exact to="/">
            Back to Home
          </NavLink>
          <img
            src="./img/95592222_939910453112947_2297522592409452544_o.jpg"
            alt="img"
          />
        </Container>
      </section>
    </>
  );
};

export default PageNotFound;
