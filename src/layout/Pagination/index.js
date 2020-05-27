import React from "react";
import { Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { PAGE_TYPE } from "../../constants/pageConstant";
const PaginationComponent = ({ ...props }) => {
  const { totalCount, pageSize, currentPage } = props;  
  const totalPage = Math.ceil(totalCount / pageSize);  
  const dispatch = useDispatch();
  const onChange = (page) => {
    dispatch({
      type: PAGE_TYPE.CHANGE_PAGE_SUCCESS,
      data: page,
    });
  };
  return (
    <Pagination
      current={currentPage}
      onChange={onChange}
      total={totalPage * 10}
    />
  );
};

export default PaginationComponent;
