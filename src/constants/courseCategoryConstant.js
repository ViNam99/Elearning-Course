import createRequestTypes from "./request";
export const COURSES_CATEGORY_TYPE = {
  ...createRequestTypes("COURSES_CATEGORY", "FETCH_COURSE_CATEGORY"),
  ...createRequestTypes("COURSES_CATEGORY", "FETCH_COURSE_BY_CATEGORY"),
};
