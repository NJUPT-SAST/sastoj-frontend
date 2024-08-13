import { Contest } from "../types/contest";
import REQUEST from "../utils/web/request";

interface GetContestsProps {
  contests: Contest[];
}

export const getContests = (): Promise<GetContestsProps> => {
  return REQUEST({
    url: "/user/contests",
    method: "GET",
  });
};

interface GetContestProps {
  description?: string;
  endTime: string;
  extraTime: number;
  id: number;
  language?: string;
  startTime: string;
  status: number;
  title: string;
  type: number;
}

export const getContest = (contestId: number): Promise<GetContestProps> => {
  return REQUEST({
    url: `/contest/${contestId}`,
    method: "GET",
  });
};


interface SelfTestProps {
  pretestId: string;
}

export const selfTest = (url: string): Promise<SelfTestProps> => {
  return REQUEST({
    url: url,
    method: "GET",
  });
};

interface SubmitProps {
  submitId: string;
}

export const submitCode = (
  url: string,
  { arg }: { arg: { code: string; language: string } },
): Promise<SubmitProps> => {
  // const formData = new FormData();
  // formData.append('code', arg.code)
  // formData.append('language', arg.language)
  // const data = JSON.stringify({
  //   code: arg.code,
  //   language: arg.language,
  // });
  return REQUEST({
    url: url,
    method: "POST",
    data: arg,
  });
};
