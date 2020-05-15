import axios from "../utils/axios";
class UserService {
  signIn = (user) => {
    return axios.request({
      method: "POST",
      url: "QuanLyNguoiDung/DangNhap",
      data: user,
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
