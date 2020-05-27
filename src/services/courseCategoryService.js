import axios from "../utils/axios";
class CourseCategoryService {
  fetchCourseCategory = () => {
    return axios.request({
      method: "GET",
      url: "QuanLyKhoaHoc/LayDanhMucKhoaHoc",
    });
  };
  fetchCourseByCategory = (maDanhMuc) => {
    return axios.request({
      method: "GET",
      url: `QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=GP01`,
    });
  };
}
export default CourseCategoryService;
