import REQUEST from "../../utils/web/request";
import {ProblemData} from "../types/ProblemTypes";

type ProblemDataWithoutId = Omit<ProblemData, "id">;
/**
 * 获取题目列表
 * @param pageNum 页数
 * @param pageSize 每页展示数量
 * @returns axios api
 */
export const getProblemList = (pageNum: number, pageSize: number) => {
    return REQUEST.get("/problem/list", {
        params: {current: pageNum, size: pageSize},
    });
};

/**
 * 获取比赛列表
 * @param pageNum 页数
 * @param pageSize 每页展示数量
 * @returns axios api
 */
export const getContestList = (pageNum: number, pageSize: number) => {
    return REQUEST.get("/contest", {
        params: {current: pageNum, size: pageSize},
    });
};

/**
 * 添加题目
 * @param problemData 题目信息
 * @returns axios api
 */
export const addProblem = (problemData: ProblemDataWithoutId) => {
  return REQUEST.post("/problem", {
    data: problemData,
  });
};

/**
 * 删除题目
 * @param problemId 题目id
 * @returns axios api
 */
export const deleteProblem = (problemId: string) => {
  return REQUEST.delete(`/problem/${problemId}`);
};

/**
 * 根据Id获取题目信息
 * @param problemId 题目id
 * @returns axios api
 */
export const getProblemById = (problemId: string) => {
  return REQUEST.get(`/problem/${problemId}`);
};

/**
 * 获取题目类型
 * @returns axios api
 */
export const getProblemType = () => {
  return REQUEST.get("/problem-types");
};

/**
 * 编辑题目
 * @param ProblemData 题目信息
 * @returns axios api
 */
export const editProblem = (problemData: ProblemData) => {
  return REQUEST.put("/problem", {
    data: problemData,
  });
};

/**
 * 获取用户组列表
 * @param pageNum 页数
 * @param pageSize 每页展示数量
 * @returns axios api
 */
export const getGroupsByPages = (pageNum: number, pageSize: number) => {
  return REQUEST.get("/group", {
      params: {current: pageNum, size: pageSize},
  });
}
export const getUsersByPage = (pageNum: number, pageSize: number, GroupIds: string[], username = "", state = 0) => {
  return REQUEST.get("/users", {
      params: {current: pageNum, size: pageSize, group_ids: GroupIds, username, state},
  });
}