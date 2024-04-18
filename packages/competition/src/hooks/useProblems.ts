import useProblemsStore from "../stores/useProblemsStore";
import { useSwrGetProblems } from "../swrHooks/problems";
import { Problem } from "../types/problem";

export const useProblems = () => {
  const [problems, setProblems] = useProblemsStore((state) => [
    state.problems,
    state.setProblems,
  ]);

  if (problems.length) {
    const isLoading = false;
    return { problems, isLoading };
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks, @typescript-eslint/no-unsafe-assignment
  const { data, isLoading, error } = useSwrGetProblems(1);

  const newProblems: Problem[] = data?.data as unknown as Problem[];

  if (!error) {
    newProblems && setProblems(newProblems);
  }

  return { newProblems, isLoading };
};
