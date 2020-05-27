import { COURSES_CATEGORY_TYPE } from "../constants/courseCategoryConstant";
import { courseCategoryService } from "../services";

export const fetchCourseCategoryAction = () => (dispatch) => {
  dispatch({
    type: COURSES_CATEGORY_TYPE.FETCH_COURSE_CATEGORY_REQUEST,
  });
  courseCategoryService
    .fetchCourseCategory()
    .then((res) => {
      dispatch({
        type: COURSES_CATEGORY_TYPE.FETCH_COURSE_CATEGORY_SUCCESS,
        data: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: COURSES_CATEGORY_TYPE.FETCH_COURSE_CATEGORY_SUCCESS,
        data: err,
      });
    });
};
export const fetchCourseByCategoryAction = (maDanhMuc) => (dispatch) => {
  dispatch({
    type: COURSES_CATEGORY_TYPE.FETCH_COURSE_BY_CATEGORY_REQUEST,
  });
  courseCategoryService
    .fetchCourseByCategory(maDanhMuc)
    .then((res) => {
      dispatch({
        type: COURSES_CATEGORY_TYPE.FETCH_COURSE_BY_CATEGORY_SUCCESS,
        data: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: COURSES_CATEGORY_TYPE.FETCH_COURSE_BY_CATEGORY_FAILURE,
        data: err,
      });
    });
};
