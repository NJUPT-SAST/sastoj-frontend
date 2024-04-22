import type { AxiosRequestConfig } from "axios";
import qs from "qs";

export class RequestCanceler {
  pendingRequest: Map<string, AbortController>;

  constructor() {
    this.pendingRequest = new Map<string, AbortController>();
  }

  generateReqKey(config: AxiosRequestConfig): string {
    const { method, url } = config;
    return [
      url ?? "",
      method ?? "",
      qs.stringify(config.params),
      qs.stringify(config.data),
    ].join("&");
  }

  addPendingRequest(config: AxiosRequestConfig) {
    const requestKey: string = this.generateReqKey(config);
    if (!this.pendingRequest.has(requestKey)) {
      const controller = new AbortController();

      // 给config挂载signal
      config.signal = controller.signal;
      this.pendingRequest.set(requestKey, controller);
    } else {
      // 如果requestKey已经存在，则获取之前设置的controller，并挂载signal
      config.signal = this.pendingRequest.get(requestKey)?.signal;
    }
  }

  removePendingRequest(config: AxiosRequestConfig) {
    const requestKey = this.generateReqKey(config);
    if (this.pendingRequest.has(requestKey)) {
      // 取消请求
      this.pendingRequest.get(requestKey)?.abort();
      // 从pendingRequest中删掉
      this.pendingRequest.delete(requestKey);
    }
  }
}
