/* eslint-disable no-undef */
import React, { useRef, useEffect } from "react";

import { notification } from "antd";

import successIcon from "../../../assets/svg/success_outline.svg";
import errorIcon from "../../../assets/svg/error_outline.svg";
import warningIcon from "../../../assets/svg/warning_outline.svg";
const withNotification = (Component) => (props) => {
  const notiRef = useRef(null);

  useEffect(() => {
    return () => {
      notification.destroy();
    };
  }, []);

  const renderStyle = (type) => {
    switch (type) {
      case "SUCCESS":
        return {
          title: "SUCCESS",
          background: "#27AE60",
          url: successIcon,
        };
      case "ERROR":
        return {
          title: "ERROR",
          background: "#EB5757",
          url: errorIcon,
        };
      case "WARNING":
        return {
          title: "WARNING",
          background: "#F2C94C",
          url: warningIcon,
        };
      default:
        return {
          title: "",
          background: "#27AE60",
          url: "",
        };
    }
  };

  const showNotification = ({
    message,
    placement,
    type,
    size,
    width,
    height,
  }) => {
    notification.config({
      duration: 2,
      placement,
      getContainer: () => notiRef.current,
    });
    notification.open({
      className: `${size ? `notice--${size}` : ""} ${
        placement ? `notice--${placement}` : ""
      }`,
      message: type || "",
      description: message,
      icon: <img src={renderStyle(type).url} alt="" />,
      style: {
        background: renderStyle(type).background,
        width,
        height,
      },
    });
  };

  return (
    <div className="Notification" id="Notification" ref={notiRef}>
      <Component {...props} showNotification={showNotification} />
    </div>
  );
};

export default withNotification;
