// import { UseFetchOptions, useFetch } from "nuxt/app";

// type Methods = "GET" | "POST" | "DELETE" | "PUT";

// export interface IResultData<T> {
//   code: number;
//   data: T;
//   msg: string;
// }

// class HttpRequest {
//   request<T = any>(
//     url: string,
//     method: Methods,
//     data: any,
//     options?: UseFetchOptions<T>,
//   ) {
//     return new Promise((resolve, reject) => {
//       const token = localStorage.getItem("token");

//       const newOptions: UseFetchOptions<T> = {
//         baseURL: "http://6qx.top/api",
//         method,
//         ...options,
//         onRequest: ({ options }) => {
//           options.headers.authorization = token;
//           console.log(options.headers);
//         },
//         onResponse({ request, response, options }) {
//           // Process the response data
//           localStorage.setItem("token", response._data.token);
//         },
//       };

//       if (method === "GET" || method === "DELETE") {
//         newOptions.params = data;
//       }

//       if (method === "POST" || method === "PUT") {
//         newOptions.body = data;
//       }

//       useFetch(url, newOptions)
//         .then((res) => {
//           resolve(res.data.value);
//         })
//         .catch((error) => {
//           reject(error);
//         });
//     });
//   }

//   get<T = any>(url: string, params?: any, options?: UseFetchOptions<T>) {
//     return this.request(url, "GET", params, options);
//   }

//   post<T = any>(url: string, data: any, options?: UseFetchOptions<T>) {
//     return this.request(url, "POST", data, options);
//   }

//   Put<T = any>(url: string, data: any, options?: UseFetchOptions<T>) {
//     return this.request(url, "PUT", data, options);
//   }

//   Delete<T = any>(url: string, params: any, options?: UseFetchOptions<T>) {
//     return this.request(url, "DELETE", params, options);
//   }
// }

// const httpRequest = new HttpRequest();

// export default httpRequest;
