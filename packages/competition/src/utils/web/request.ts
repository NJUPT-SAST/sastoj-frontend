import axios from "axios";

// axios二次封装
const devBaseURL = "在开发环境下接口的baseURL";
const proBaseURL = "在生产环境下接口的baseURL";
//在vue的config文件夹下可以看开发环境和生产环境的名称,通常为development和production
const BASE_URL =
  process.env.NODE_ENV === "development" ? devBaseURL : proBaseURL;

const TIMEOUT_MILLISECONDS = 60000; // 超时链接

const REQUEST = axios.create({
  //   生产环境中禁止跨域
  //   withCredentials: false,
  baseURL: BASE_URL,
  timeout: TIMEOUT_MILLISECONDS,
});

export default REQUEST;
