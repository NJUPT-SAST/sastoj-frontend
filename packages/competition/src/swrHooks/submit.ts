import { useParams } from "react-router-dom";
import useSWRMutation from "swr/mutation";
import { submitCode } from "../apis/contest";

export const useSwrSubmit = () => {
  const contestId = localStorage.getItem("contestId") as unknown as number;
  const { problemId } = useParams();
  const { data, trigger } = useSWRMutation(
    `/user/contests/${contestId}/problems/${problemId}/submission`,
    submitCode,
  );

  return { data, trigger };
};
