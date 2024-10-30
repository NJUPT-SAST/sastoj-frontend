import axios from "axios";
import { beforeRequest, responseFailed, responseSuccess } from "./interceptors";

// axios二次封装
// const devBaseURL = "http://127.0.0.1:4523/m1/3794358-0-default";
const devBaseURL = "/api";
const proBaseURL = "https://acm.sast.fun/api";
//在vue的config文件夹下可以看开发环境和生产环境的名称,通常为development和production
export const BASE_URL =
  process.env.NODE_ENV === "development" ? devBaseURL : proBaseURL;

const TIMEOUT_MILLISECONDS = 60000; // 超时链接

const REQUEST = axios.create({
  //   生产环境中禁止跨域
  //   withCredentials: false,
  baseURL: BASE_URL,
  timeout: TIMEOUT_MILLISECONDS,
});

REQUEST.interceptors.request.use(beforeRequest);

REQUEST.interceptors.response.use(responseSuccess, responseFailed);

export default REQUEST;
