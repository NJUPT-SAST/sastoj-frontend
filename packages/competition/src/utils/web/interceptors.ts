import {
  AxiosError,
  InternalAxiosRequestConfig,
  type AxiosResponse,
} from "axios";

import { RequestCanceler } from "./Canceler";
import { HTTP_STATUS } from "./status";
import { ResponseError } from "../../types/responseError";

const canceler = new RequestCanceler();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const beforeRequest = (config: InternalAxiosRequestConfig<any>) => {
  const token = localStorage.getItem("token");
  token && (config.headers.token = token);

  // 检查是否存在重复请求，若存在则取消已发的请求
  canceler.removePendingRequest(config);
  // 把当前的请求信息添加到pendingRequest
  canceler.addPendingRequest(config);

  return config;
};

export const responseSuccess = (response: AxiosResponse) => {
  //成功则返回response里有用的data
  return response.data as AxiosResponse;
};

//失败则进行统一的错误处理
export const responseFailed = (error: AxiosError): Promise<never> | void => {
  const { response } = error;

  if (response?.status === HTTP_STATUS.NOT_FOUND) {
    return Promise.reject({ desc: "请求资源不存在" } as ResponseError);
  } else if (response?.status === HTTP_STATUS.BAD_GATEWAY) {
    return Promise.reject({ desc: "服务端出现了问题" } as ResponseError);
  } else if (response?.status === HTTP_STATUS.FORBIDDEN) {
    return Promise.reject({ desc: "没有权限访问" } as ResponseError);
  } else if (response?.status === HTTP_STATUS.AUTHENTICATE) {
    window.location.href = '/login';
    localStorage.clearAll()
    // return Promise.reject({ desc: "需要鉴权" } as ResponseError);
  } else if (response?.status === HTTP_STATUS.SERVER_ERROR) {
    return Promise.reject({ desc: "服务器错误" } as ResponseError);
  } else {
    return Promise.reject({
      desc: `发生错误， 错误码${response?.status}`,
    } as ResponseError);
  }
};
