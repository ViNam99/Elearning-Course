import React from "react";
import { classPrefixor } from "../../../utils/classPrefixor";

const PopularCourseComponent = () => {
  const prefix = "popularCourse";
  const c = classPrefixor(prefix);
  return <section className={prefix}></section>;
};

export default PopularCourseComponent;
