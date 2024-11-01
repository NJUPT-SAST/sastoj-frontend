import REQUEST from "../../utils/web/request";

/**
 * 获取可以批改的题目列表
 * @param userId 用户id
 * @returns axios api
 */
export const getJudgableProblemList = (useId: string) => {
  return REQUEST.get("http://127.0.0.1:4523/m1/3794358-3426485-default/judge", {
    headers: { user_id: useId },
  });
};

export const getSubmissionsbyProblemId = (problemId: number, status = 0) => {
  return REQUEST.get(
    `http://127.0.0.1:4523/m1/3794358-3426485-default/judge/${problemId}`,
    {
      params: {
        status,
      },
    },
  );
};
