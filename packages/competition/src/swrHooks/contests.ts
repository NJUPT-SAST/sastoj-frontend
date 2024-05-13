import useSWR from "swr";
import { getContests } from "../apis/contest";

export const useSwrGetContests = () => {
  const { data, isLoading } = useSWR("get Contests", getContests);

  return { data, isLoading };
};
