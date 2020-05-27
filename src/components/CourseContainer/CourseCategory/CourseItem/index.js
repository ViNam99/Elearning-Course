import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { classPrefixor } from "../../../../utils/classPrefixor";
const prefix = "courseItemCategory";
const c = classPrefixor(prefix);
const CourseItem = ({ ...props }) => {
  const { course } = props;
  return (
    <div className="col-lg-3 my-3">
      <div className={prefix}>
        <div className="card">
          <img
            className="card-img-top w-100"
            src={course.hinhAnh}
            alt={course.tenKhoaHoc}
            height={150}
          />
          <div className="card-body text-center">
            <Row>
              <Col lg="12 p-0">
                <h4 className="py-3">{course.tenKhoaHoc}</h4>
              </Col>
            </Row>
            <Row>
              <Col lg="6 p-0">
                <span>{course.nguoiTao.hoTen}</span>
              </Col>
              <Col lg="6 p-0">
                <Row>
                  <Col lg="5 p-0">
                    <span>{course.soLuongHocVien}</span>
                  </Col>
                  <Col lg="7 p-0">
                    <span>{course.luotXem}</span>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div className="card-footer text-center">
            <Button className={c`btn`}>Detail</Button>
            <Button className={c`btn2`}>Add to Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseItem;
