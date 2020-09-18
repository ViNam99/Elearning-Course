/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import BannerComponent from "./BannerComponent";
import AboutComponent from "./AboutComponent";
import PopularCourseComponent from "./PopularCourseComponent";


const HomeContainer = () => {
  return (
    <>
      <BannerComponent />
      <AboutComponent />
      <PopularCourseComponent />
    </>
  );
};

export default HomeContainer;
