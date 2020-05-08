import React from "react";
import BannerComponent from "../../components/HomeContainer/BannerComponent";
import AboutComponent from "../../components/HomeContainer/AboutComponent";
import PopularCourseComponent from "../../components/HomeContainer/PopularCourseComponent";

const HomePage = () => {
  return (
    <>
      <BannerComponent />
      <AboutComponent />
      <PopularCourseComponent />
    </>
  );
};

export default HomePage;
