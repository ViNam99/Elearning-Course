import React, { useState } from "react";
import { classPrefixor } from "../../utils/classPrefixor";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
import { useSelector } from "react-redux";
const Header = () => {
  const prefix = "header";
  const c = classPrefixor(prefix);
  const [count, setCount] = useState(0);
  const { credentials } = useSelector((state) => state.userReducer);

  const handleLogOut = () => {
    localStorage.removeItem("credentials");
    window.location.replace("/");
  };
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <NavLink to="/signin">Sign In</NavLink>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1">
        <NavLink to="/signup">Sign Up</NavLink>
      </Menu.Item>
    </Menu>
  );
  const menuAccount = (
    <Menu>
      <Menu.Item key="0">
        <NavLink to="/account">Your Account</NavLink>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1">
        <Nav.Link onClick={() => handleLogOut()}>Log Out</Nav.Link>
      </Menu.Item>
    </Menu>
  );
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
            {Object.keys(credentials).length > 0 ? (
              <Nav.Item>
                <Dropdown overlay={menuAccount}>
                  <Button
                    style={{ display: "flex", justifyContent: "center" }}
                    className="ant-dropdown-link"
                  >
                    <span>Hi, {credentials.taiKhoan}</span>
                  </Button>
                </Dropdown>
              </Nav.Item>
            ) : (
              <Nav.Item>
                <Dropdown overlay={menu}>
                  <Button
                    style={{ display: "flex", justifyContent: "center" }}
                    className="ant-dropdown-link"
                  >
                    <UserOutlined className="mt-1 mr-2" />
                    <span>SignIn / SignUp</span>
                  </Button>
                </Dropdown>
              </Nav.Item>
            )}

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
