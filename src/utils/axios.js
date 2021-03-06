import axios from "axios";
const instance = axios.create({
  baseURL: "http://elearning0706.cybersoft.edu.vn/api/",
});

export const setAuthorization = (token) => {
  //Khi chạy này 1 lần tất cả token sẽ gắn vào header
  return (instance.defaults.headers.common.Authorization = `Bearer ${token}`);
};
export default instance;
