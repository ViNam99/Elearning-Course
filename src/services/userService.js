import axios from "../utils/axios";
class UserService {
  signIn = (user) => {
    return axios.request({
      method: "POST",
      url: "QuanLyNguoiDung/DangNhap",
      data: user,
    });
  };
  signUp = (data) => {
    return axios.request({
      method: "POST",
      url: "QuanLyNguoiDung/DangKy",
      data,
    });
  };
  getPerInfor = (info) => {
    return axios.request({
      method: "POST",
      url: "QuanLyNguoiDung/ThongTinTaiKhoan",
      data: {
        taiKhoan: info.taiKhoan,
      },
    });
  };
}
export default UserService;
