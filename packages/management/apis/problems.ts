import REQUEST from "~/utils/web/request";

export const getProblemsByPage = (size: number, currency: number) => {
  return REQUEST({
    url: "problem/list",
    method: "GET",
    params: {
      size: size,
      currency: currency,
    },
  });
};
