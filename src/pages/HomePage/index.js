import React, { useEffect } from "react";
import BannerComponent from "../../components/HomeContainer/BannerComponent";
import AboutComponent from "../../components/HomeContainer/AboutComponent";
import PopularCourseComponent from "../../components/HomeContainer/PopularCourseComponent";
import UserLayout from "../../layout/UserLayout";
import { useSelector } from "react-redux";
import withNotification from "../../components/common/HOC/withNotification";
const HomePage = (props) => {
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
  }, [credentials.hoTen, props, statusLoginSuccess]);
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

export default withNotification(HomePage);
