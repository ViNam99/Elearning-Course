import { COURSES_TYPE } from "../constants/courseConstant";
import { courseService } from "../services";

export const fetchCourseListAction = () => (dispatch) => {
  dispatch({
    type: COURSES_TYPE.FETCH_LIST_REQUEST,
  });
  courseService
    .fetchCourseList()
    .then((res) => {
      dispatch({
        type: COURSES_TYPE.FETCH_LIST_SUCCESS,
        data: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: COURSES_TYPE.FETCH_LIST_FAILURE,
        data: err,
      });
    });
};
export const fetchCourseSliceListAction = (currentPage, pageSize) => (
  dispatch
) => {
  dispatch({
    type: COURSES_TYPE.FETCH_LIST_SLICE_REQUEST,
  });

  courseService
    .fetchCourseSliceList(currentPage, pageSize)
    .then((res) => {
      dispatch({
        type: COURSES_TYPE.FETCH_LIST_SLICE_SUCCESS,
        data: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: COURSES_TYPE.FETCH_LIST_SLICE_FAILURE,
        data: err,
      });
    });
};
