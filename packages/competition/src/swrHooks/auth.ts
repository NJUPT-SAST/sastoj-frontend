import useSWRMutation from "swr/mutation";
import { login } from "../apis/public";

export const useSwrLogin = () => {
  const { trigger, isMutating } = useSWRMutation("/login", login);
  return {
    trigger,
    isMutating,
  };
};
