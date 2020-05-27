/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCourseCategoryAction,
  fetchCourseByCategoryAction,
} from "../../../actions/courseCategoryAction";
import { Nav } from "react-bootstrap";
import CourseItem from "./CourseItem";
import useFetchCourseList from "../../common/custom Hook/useFetchCourseList";
import PaginationComponent from "../../../layout/Pagination";
import { fetchCourseSliceListAction } from "../../../actions/courseAction";

const prefix = "courseCategory";

const CoursesCategory = () => {
  const dispatch = useDispatch();
  const { courseCategory, courseByCategory } = useSelector(
    (state) => state.courseCategoryReducer
  );

  const { totalCount, currentPage } = useFetchCourseList();
  useEffect(() => {
    dispatch(fetchCourseCategoryAction());
  }, []);
  const renderCourseCategory = () => {
    debugger
    return courseCategory.map((courseList, index) => {
      return (
        <Nav.Link
          key={index}
          eventKey={index + 1}
          onClick={() =>
            dispatch(fetchCourseByCategoryAction(courseList.maDanhMuc))
          }
        >
          {courseList.tenDanhMuc}
        </Nav.Link>
      );
    });
  };
  const renderCourseByCategory = () => {
    return courseByCategory.map((courseItem, index) => {
      return <CourseItem key={index} course={courseItem} />;
    });
  };
  return (
    <section className={prefix}>
      <Container fluid>
        <Row>
          <Col lg="2">
            <Nav defaultActiveKey="0" className="flex-column ">
              <Nav.Link
                eventKey="0"
                onClick={() => dispatch(fetchCourseSliceListAction(1, 8))}
              >
                Tất cả
              </Nav.Link>
              {renderCourseCategory()}
            </Nav>
          </Col>
          <Col lg="10">
            <Row>{renderCourseByCategory()}</Row>
          </Col>
        </Row>
        <Row>
          <PaginationComponent
            totalCount={totalCount}
            pageSize={8}
            currentPage={currentPage}
          />
        </Row>
      </Container>
    </section>
  );
};

export default CoursesCategory;
