/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import BannerComponent from "./BannerComponent";
import AboutComponent from "./AboutComponent";
import PopularCourseComponent from "./PopularCourseComponent";

import { useSelector } from "react-redux";
import withNotification from "../common/HOC/withNotification";

const HomeContainer = (props) => {
  const { statusLoginSuccess, credentials } = useSelector(
    (state) => state.userReducer
  );
  useEffect(() => {
    if (statusLoginSuccess === 200) {
      props.showNotification({
        type: "SUCCESS",
        message: `Chào Mừng Bạn ${credentials.hoTen} Đến Với EDUMARK`,
      });
    }
  }, [statusLoginSuccess]);
  return (
    <>
      <BannerComponent />
      <AboutComponent />
      <PopularCourseComponent />
    </>
  );
};

export default withNotification(HomeContainer);
