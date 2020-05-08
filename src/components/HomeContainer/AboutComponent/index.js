import React from "react";
import { classPrefixor } from "../../../utils/classPrefixor";
import { Container, Row, Col } from "react-bootstrap";

const AboutComponent = () => {
  const prefix = "about";
  const c = classPrefixor(prefix);
  return (
    <section className={prefix}>
      <Container>
        <Row>
          <Col lg="6" xl="5">
            <div className={c`introduce`}>
              <h3>
                Over 7000 Tutorials <br />
                from 20 Courses
              </h3>
              <p>
                Our set he for firmament morning sixth subdue darkness creeping
                gathered divide our let god moving. Moving in fourth air night
                bring upon you’re it beast let you dominion likeness open place
                day great wherein heaven sixth lesser subdue fowl
              </p>
              <a>Enroll a Course</a>
            </div>
          </Col>
          <Col lg={{span:6}} xl={{span : 6 , offset:1}}>
            <div className={c`tutorials`}>
              <div>
                <div className="courses">
                  <div className="inner__courses">
                    <div className="text__info">
                      <span>20+</span>
                      <p> Courses</p>
                    </div>
                  </div>
                </div>
                <div className="courses-blue">
                  <div className="inner__courses">
                    <div className="text__info">
                      <span>7638</span>
                      <p> Courses</p>
                    </div>
                  </div>
                </div>
                <div className="courses-sky">
                  <div className="inner__courses">
                    <div className="text__info">
                      <span>230+</span>
                      <p> Courses</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutComponent;
