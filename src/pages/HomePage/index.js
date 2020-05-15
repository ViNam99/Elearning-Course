import React from "react";
import BannerComponent from "../../components/HomeContainer/BannerComponent";
import AboutComponent from "../../components/HomeContainer/AboutComponent";
import PopularCourseComponent from "../../components/HomeContainer/PopularCourseComponent";
import UserLayout from "../../layout/UserLayout";

const HomePage = () => {
  return (
    <>
      <UserLayout>
        <BannerComponent />
        <AboutComponent />
        <PopularCourseComponent />
      </UserLayout>
    </>
  );
};

export default HomePage;
