import React from "react";
import UserLayout from "../../layout/UserLayout";
import HomeContainer from "../../components/HomeContainer";
import withNotification from "../../components/common/HOC/withNotification";

const HomePage = (props) => {
  return (
    <>
      <UserLayout>
        <HomeContainer />
      </UserLayout>
    </>
  );
};

export default withNotification(HomePage);
