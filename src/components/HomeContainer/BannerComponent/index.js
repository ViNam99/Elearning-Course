import React from "react";
import { classPrefixor } from "../../../utils/classPrefixor";
import { Container, Row, Col } from "react-bootstrap";
const BannerComponent = () => {
  const prefix = "banner";
  const c = classPrefixor(prefix);
  return (
    <section className={prefix}>
      <Container>
        <Row>
          <Col lg="5">
            <div className={c`left`}>
              <div className="left__child">
                <h1>Take the first step to learn with us</h1>
                <p>
                  In the history of modern astronomy, there is probably no one
                  greater leap forward than the building and launch of the space
                  telescope known as the Hubble.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={{ span: 5, offset: 2 }}>
              <div className={c`right`}>
              <img src="./img/header-img.png" alt=""/>

              </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BannerComponent;
