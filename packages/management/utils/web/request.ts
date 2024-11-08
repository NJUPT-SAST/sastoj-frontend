import axios from "axios";
import { beforeRequest, responseFailed, responseSuccess } from "./interceptors";

// axios二次封装
const devBaseURL = "/api";
const proBaseURL = "/api";

const BASE_URL =
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
