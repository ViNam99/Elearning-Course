import axios from "../utils/axios";
class UserService {
  signIn = user => {      
    return axios.request({
      method:'POST',
      url:'QuanLyNguoiDung/DangNhap',
      data:user
    })
  }
}
export default UserService;
