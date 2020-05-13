import axtios from "../utils/axtios";

class CourseService {
  fetchCourseList = () => {
    return axtios.request({
      method: "GET",
      url: "QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP08",
    });
  };
}
export default CourseService;
