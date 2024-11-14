import useSWR from "swr";
import { getRank } from "../apis/public";

export const useSWRGetRank = (
  contestId: string,
  current?: number,
  size?: number,
) => {
  const { data, mutate } = useSWR(
    ["get problems", contestId],
    ([, contestId]) =>
      getRank({
        contest_id: contestId,
        current: current ?? 1,
        size: size ?? 10,
      }),
  );

  return { data, mutate };
};
