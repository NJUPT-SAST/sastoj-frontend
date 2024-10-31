import { useSwrLogin } from "./hooks/swrHooks/auth";
import { showToast } from "@ui-aurora/react";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const { trigger } = useSwrLogin();
  const navigate = useNavigate();

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
      //@ts-ignore
      trigger({ username, password })
        .then((response) => {
          console.log(response);
          localStorage.setItem("token", response?.token ?? undefined);
          localStorage.setItem("username", username ?? undefined);
          showToast({
            type: "success",
            content: <>登录成功</>,
          });
          setTimeout(() => {
            navigate("/admin");
          }, 500);
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
