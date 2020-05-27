/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourseSliceListAction } from "../../../actions/courseAction";
const useFetchCourseList = () => {
  const dispatch = useDispatch();
  const { totalCount, currentPage } = useSelector(
    (state) => state.courseCategoryReducer
  );
  useEffect(() => {
    dispatch(fetchCourseSliceListAction(currentPage, 8));
  }, [currentPage]);
  return { totalCount, currentPage };
};
export default useFetchCourseList;
