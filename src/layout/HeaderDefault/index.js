import React, { useState, useEffect } from "react";
import { classPrefixor } from "../../utils/classPrefixor";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { CREDENTIAL_TYPE } from "../../constants/userConstants";

const prefix = "header";
const c = classPrefixor(prefix);
const Header = () => {
  const [count, setCount] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const { credentials } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const handleLogOut = () => {
    localStorage.removeItem("credentials");
    dispatch({
      type: CREDENTIAL_TYPE.SIGNIN_CREDENTIAL_SUCCESS,
      data: {},
    });
    setIsLogin(false);
  };
  useEffect(() => {
    if (Object.keys(credentials).length > 0) {
      setIsLogin(true);
    }
  }, [credentials]);

  const menu = (isLogin) => {
    return (
      <>
        <Menu>
          <Menu.Item key="0">
            {!isLogin ? (
              <NavLink to="/signin">Sign In</NavLink>
            ) : (
              <NavLink to="/account">Your Account</NavLink>
            )}
          </Menu.Item>
          <Menu.Divider />
          <Menu.Item key="1">
            {!isLogin ? (
              <NavLink to="/signup">Sign Up</NavLink>
            ) : (
              <Nav.Link onClick={() => handleLogOut()} className="p-0">
                Log Out
              </Nav.Link>
            )}
          </Menu.Item>
        </Menu>
      </>
    );
  };

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
              <Dropdown overlay={menu(isLogin)}>
                <Button
                  style={{ display: "flex", justifyContent: "center" }}
                  className="ant-dropdown-link"
                >
                  {!isLogin && <UserOutlined className="mt-1 mr-2" />}
                  {!isLogin ? (
                    <span>SignIn / SignUp</span>
                  ) : (
                    <span>Hi, {credentials.taiKhoan}</span>
                  )}
                </Button>
              </Dropdown>
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
