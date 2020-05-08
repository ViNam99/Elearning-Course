import axtios from "../utils/axtios";

class CourseService {
  fetchCourseList = () => {
    return axtios.request({
      method: "GET",
      url: "QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
    });
  };
}
export default CourseService;
