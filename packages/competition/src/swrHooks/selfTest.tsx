import { useParams } from "react-router-dom";
import { selfTest } from "../apis/contest";
import useSWRMutation from "swr/mutation";

export const useSwrSelfTest = () => {
  const contestId = localStorage.getItem("contestId") as unknown as number;
  const { problemId } = useParams();
  const { data, trigger } = useSWRMutation(
    `/user/contests/${contestId}/problems/${problemId}/test`,
    selfTest,
  );

  return { data, trigger };
};
