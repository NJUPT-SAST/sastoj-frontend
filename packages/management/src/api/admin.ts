import REQUEST from "../../utils/web/request";

/**
 * 获取题目列表
 * @param pageNum 页数
 * @param pageSize 每页展示数量
 * @returns axios api
 */
export const getProblemList = (pageNum: number, pageSize: number) => {
  return REQUEST.get("/problem/list", {
    params: { currency: pageNum, size: pageSize },
  });
};


/**
 * 获取比赛列表
 * @param pageNum 页数
 * @param pageSize 每页展示数量
 * @returns axios api
 */
export const getContestList = (pageNum: number, pageSize: number) => {
  return REQUEST.get("/contest?apifoxResponseId=437560253", {
    params: { currency: pageNum, size: pageSize },
  });
};
