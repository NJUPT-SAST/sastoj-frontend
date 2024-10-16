import REQUEST from "../../utils/web/request";

/**
 * 获取可以批改的题目列表
 * @param userId 用户id
 * @returns axios api
 */
export const getToJudgedProblemList = (useId: string) => {
  return REQUEST.get("/judger", {
    headers: { user_id: useId },
  });
};
