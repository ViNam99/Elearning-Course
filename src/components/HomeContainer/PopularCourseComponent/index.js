import React, { useEffect } from "react";
import { classPrefixor } from "../../../utils/classPrefixor";
import { fetchCourseListAction } from "../../../actions/courseAction";

//import libary slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//import libary react-bootstrap
import { Container } from "react-bootstrap";

//import redux
import { useDispatch, useSelector } from "react-redux";

const prefix = "popularCourse";
const c = classPrefixor(prefix);

const PopularCourseComponent = () => {
  const dispatch = useDispatch();
  const { courseList } = useSelector((state) => state.courseReducer);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    autoplay: false,
    speed: 5000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    dots: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          infinite: true,
          slidesToShow: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          infinite: true,
          slidesToShow: 1,
        },
      },
    ],
  };
  useEffect(() => {
    dispatch(fetchCourseListAction());
  }, [dispatch]);

  const renderCourseList = () => {
    return courseList.map((course, index) => {
      return (
        <div className="p-3" key={index}>
          <div className="card " key={index}>
            <img
              className="card-img-top w-100"
              src={course.hinhAnh}
              alt={course.tenKhoaHoc}
              height={250}
            />
            <div className="card-body">
              <h4 className="card-title">{course.tenKhoaHoc}</h4>
              <button className={c`btn`}><span>JOIN NOW</span></button>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <section className={prefix}>
      <Container>
        <div className={c`title`}>
          <h3>Popular Courses <br/> Available Right Now</h3>
          <p>
            Your domain control panel is designed for ease-of-use and allows for
            all aspects of your domains.
          </p>
        </div>

        <Slider {...settings}>{renderCourseList()}</Slider>
      </Container>
    </section>
  );
};

export default PopularCourseComponent;
