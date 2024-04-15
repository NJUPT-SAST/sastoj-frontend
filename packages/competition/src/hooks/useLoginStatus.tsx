import { create } from "zustand";
import { useSwrLogin } from "../swrHooks/auth";
import { showToast } from "@ui-aurora/react";

interface LoginStatus {
  status: "success" | "error" | "undefined";
  success: () => void;
  error: () => void;
}

export const useLoginStore = create<LoginStatus>()((set) => ({
  status: "undefined",
  success: () => set({ status: "success" }),
  error: () => set({ status: "error" }),
}));

export const useLogin = () => {
  const { trigger } = useSwrLogin();

  const [loginSuccess, loginError] = useLoginStore((status) => [
    status.success,
    status.error,
  ]);

  const login = (username: string, password: string) => {
    trigger({ username, password })
      .then((response) => {
        console.log(response);
        loginSuccess();
        showToast({
          type: "success",
          content: <>登录成功</>,
        });
      })
      .catch((error) => {
        console.log(error);
        loginError();
        showToast({
          type: "error",
          content: <>登陆失败，用户和账户名错误</>,
        });
      });
  };

  return login;
};
