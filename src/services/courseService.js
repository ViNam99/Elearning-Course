import axios from "../utils/axios";
class CourseService {
  fetchCourseList = () => {
    return axios.request({
      method: "GET",
      url: "QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
    });
  };
}
export default CourseService;
