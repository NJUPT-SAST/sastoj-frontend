import instance from "./request";

instance.interceptors.request.use((config) => {
  console.log("hello");
  return config;
});
