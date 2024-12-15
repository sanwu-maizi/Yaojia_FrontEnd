import axios from "axios";
import { BASE_URL, REQUEST_LIMIT_TIME } from "../constants";
 
const service = axios.create({
  baseURL: BASE_URL, 
  timeout: REQUEST_LIMIT_TIME // 请求超时时间
});
 
service.interceptors.request.use(
  config => {
    return {
      ...config,
      withCredentials: true,
    };
  },
  error => {
    Promise.reject(error);
  }
);
 
// service.interceptors.response.use(
//   (response) => {
//     const res = response.data;
//     return res;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );
 
export default service;
