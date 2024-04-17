import { useSwrLogin } from "../swrHooks/auth";
import { showToast } from "@ui-aurora/react";

export const useLogin = () => {
  const { trigger } = useSwrLogin();

  const login = (username: string, password: string) => {
    if (!username) {
      showToast({
        type: "error",
        content: <>请输入用户名</>,
      });
    } else if (!password) {
      showToast({
        type: "error",
        content: <>请输入密码</>,
      });
    } else {
      trigger({ username, password })
        .then((response) => {
          console.log(response);
          showToast({
            type: "success",
            content: <>登录成功</>,
          });
        })
        .catch((error) => {
          console.log(error);
          showToast({
            type: "error",
            content: <>登陆失败，用户名和密码错误</>,
          });
        });
    }
  };

  return login;
};
