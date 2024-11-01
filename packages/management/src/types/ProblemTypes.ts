export interface ProblemDetail {
  new: boolean;
  id: number;
  problemName: string;
  description: string;
  type: number;
  score: number;
  answer: string[];
}
export interface ProblemData {
  id: string;
  typeId: string;
  title: string; //题目名称
  content: string; //题目内容
  point: number; //题目分值
  contestId: string; //比赛id
  caseVersion: number; //题目版本
  index: number; //题目编号
  config: string; //题目配置
  ownerId: number;
  visability: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  metadata: any;
}

export type FCProblemTypes =
  | "freshcup-single-choice"
  | "freshcup-multiple-choice"
  | "freshcup-short-answer"
  | "gojudge-classic-algo";
