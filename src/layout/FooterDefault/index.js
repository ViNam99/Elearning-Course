import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { classPrefixor } from "../../utils/classPrefixor";
import {
  FacebookFilled,
  InstagramFilled,
  TwitterSquareFilled,
  YoutubeFilled,
} from "@ant-design/icons";
const Footer = () => {
  const prefix = "footer";
  const c = classPrefixor(prefix);
  return (
    <footer className={prefix}>
      <Container>
        <Row>
          <Col lg="4">
            <div className={c`intro`}>
              <img src="./img/logo.png" alt="img" />
              <p>
                Firmament morning sixth subdue darkness creeping gathered divide
                our let god moving. Moving in fourth air night bring upon it
                beast let you dominion likeness open place day great.
              </p>
              <Nav>
                <Nav.Item>
                  <Nav.Link>
                    <FacebookFilled />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <TwitterSquareFilled />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <InstagramFilled />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link>
                    <YoutubeFilled />
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </Col>
          <Col lg={{ span: 2, offset: 1 }} className={c`courses`}>
            <h3>Courses</h3>
            <Nav.Item>
              <Nav.Link>Front End</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Back End</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Full Stack</Nav.Link>
            </Nav.Item>
          </Col>
          <Col lg="2">
            <h3>Resourches</h3>
            <Nav.Item>
              <Nav.Link>Courses</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Contact</Nav.Link>
            </Nav.Item>
          </Col>
          <Col lg="3" className={c`address`}>
            <h3>Address</h3>
            <p>
              200, D-block, Green lane USA +10 367 467 8934 edumark@contact.com
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
