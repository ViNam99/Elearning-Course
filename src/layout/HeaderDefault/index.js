import React from "react";
import { classPrefixor } from "../../utils/classPrefixor";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
const Header = () => {
  const prefix = "header";
  const c = classPrefixor(prefix);
  return (
    <header className={prefix}>
      <Container>
        <Navbar expand="lg">
          <Navbar.Brand className={c`title`}>
            <NavLink exact to="/">
              <img src="./img/logo.png" alt="none" className="mb-2" />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Item>
                <NavLink exact to="/">
                  Home
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/courses"> Courses</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/about"> About</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/contact"> Contact</NavLink>
              </Nav.Item>
            </Nav>
            <Nav.Item>
              <Button>
                <PersonIcon className="mr-1 mb-1" />
                Login
              </Button>
            </Nav.Item>
            <Nav.Item className={c`cart`}>
              <ShoppingCartIcon />
              <span>0</span>
            </Nav.Item>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
