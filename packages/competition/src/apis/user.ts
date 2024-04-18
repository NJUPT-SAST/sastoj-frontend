import REQUEST from "../utils/web/request";

export const getProblems = (url: string) => {
  return REQUEST({
    url: url,
    method: "GET",
  });
};
