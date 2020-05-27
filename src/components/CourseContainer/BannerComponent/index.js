import React from "react";
import { classPrefixor } from "../../../utils/classPrefixor";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";

const prefix = "courseBanner";
const c = classPrefixor(prefix);
const BannerComponent = () => {
  return (
    <section className={prefix}>
      <Container>
        <Row>
          <Col lg={{ offset: 6 }}>
            <div className={c`title`}>
              <h2>Courses</h2>
              <p>
                In the history of modern astronomy, there is probably no one
                greater leap forward than the building.
              </p>
              <span className="box">
                <NavLink exact to="/">
                  Home
                </NavLink>
                <ArrowRightOutlined />
                <NavLink to="/courses"> Courses</NavLink>
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BannerComponent;
