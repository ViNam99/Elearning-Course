import React, { useState } from "react";
import { classPrefixor } from "../../utils/classPrefixor";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";

const Header = () => {
  const prefix = "header";
  const c = classPrefixor(prefix);
  const [count, setCount] = useState(0);
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
              <Button style={{ display: "flex", justifyContent: "center" }}>
                <UserOutlined className="mt-1 mr-2" />
                <span>Login</span>
              </Button>
            </Nav.Item>
            <Nav.Item className={c`cart`}>
              <ShoppingCartOutlined
                style={{ fontSize: "25px" }}
                className="head-example"
                onClick={() => setCount((count) => count + 1)}
              />
              <span className="cart__count">{count}</span>
            </Nav.Item>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
