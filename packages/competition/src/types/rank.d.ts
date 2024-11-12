export interface Response {
  users: User[];
  [property: string]: unknown;
}

export interface User {
  penalty?: number;
  problems: Problem[];
  rank: number;
  totalScore: number;
  username: string;
  [property: string]: unknown;
}

export interface Problem {
  point: number;
  problemId: string;
  scoreAchievedTime: string;
  state: number;
  triedTimes?: number;
  [property: string]: unknown;
}
