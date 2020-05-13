import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const HeaderReference = () => {
  const prefix = "headerReference";
  return (
    <>
      <header className={prefix}>
        <Container>
          <Navbar>
            <NavLink exact to="/">
              <img src="./img/logo.png" alt="" />
            </NavLink>
          </Navbar>
        </Container>
      </header>
    </>
  );
};

export default HeaderReference;
