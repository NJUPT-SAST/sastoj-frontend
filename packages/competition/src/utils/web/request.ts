import axios from "axios";

const BASE_URL = "/test";
const TIMEOUT_MILLISECONDS = 60000; // 超时链接

const instance = axios.create({
  //生产环境中禁止跨域
  //   withCredentials: false,
  baseURL: BASE_URL,
  timeout: TIMEOUT_MILLISECONDS,
});

export default instance;
