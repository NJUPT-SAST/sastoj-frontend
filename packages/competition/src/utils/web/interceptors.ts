import { AxiosError, AxiosResponse } from "axios";

import REQUEST from "./request";
import { RequestCanceler } from "./Canceler";
import { HTTP_STATUS } from "./status";

const canceler = new RequestCanceler();

REQUEST.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  token && (config.headers.Authorization = token);

  // 检查是否存在重复请求，若存在则取消已发的请求
  canceler.removePendingRequest(config);
  // 把当前的请求信息添加到pendingRequest
  canceler.addPendingRequest(config);

  return config;
});

REQUEST.interceptors.response.use(
  (response) => {
    //成功则返回response里有用的data
    return response.data as AxiosResponse;
  },
  //失败则进行统一的错误处理
  (error) => {
    const { response } = error as AxiosError;

    if (response?.status === HTTP_STATUS.NOT_FOUND) {
      return Promise.reject({ desc: "请求资源不存在" });
    } else if (response?.status === HTTP_STATUS.BAD_GATEWAY) {
      return Promise.reject({ desc: "服务端出现了问题" });
    } else if (response?.status === HTTP_STATUS.FORBIDDEN) {
      return Promise.reject({ desc: "没有权限访问" });
    } else if (response?.status === HTTP_STATUS.AUTHENTICATE) {
      return Promise.reject({ desc: "需要鉴权" });
    } else if (response?.status === HTTP_STATUS.SERVER_ERROR) {
      return Promise.reject({ desc: "服务器错误" });
    } else {
      return Promise.reject({ desc: `发生错误， 错误码${response?.status}` });
    }
  }
);
