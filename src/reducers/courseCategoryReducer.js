import { COURSES_CATEGORY_TYPE } from "../constants/courseCategoryConstant";
import { COURSES_TYPE } from "../constants/courseConstant";
import { PAGE_TYPE } from "../constants/pageConstant";

const initialState = {
  courseCategory: [],
  courseByCategory: [],
  totalCount: 0,
  currentPage: 1,
};
const courseCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case COURSES_CATEGORY_TYPE.FETCH_COURSE_CATEGORY_SUCCESS:
      return { ...state, courseCategory: action.data };
    case COURSES_CATEGORY_TYPE.FETCH_COURSE_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        courseByCategory: action.data,
        totalCount: action.data.length,
      };
    case COURSES_TYPE.FETCH_LIST_SLICE_SUCCESS:
      return {
        ...state,
        courseByCategory: action.data.items,
        totalCount: action.data.totalCount,
      };
    case PAGE_TYPE.CHANGE_PAGE_SUCCESS:
      return { ...state, currentPage: action.data };
    default:
      return state;
  }
};
export default courseCategoryReducer;
