import {useSwrLogin} from "./hooks/swrHooks/auth";
import {showToast} from "@ui-aurora/react";
import {useNavigate} from "react-router-dom";
import {parseToken} from "./utils/parseToken.ts";

export const useLogin = () => {
    const {trigger} = useSwrLogin();
    const navigate = useNavigate();

    return (username: string, password: string) => {
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
            trigger({username, password})
                .then((response) => {
                    // console.log(response);
                    const token = response?.token;
                    localStorage.setItem("token", token ?? undefined);
                    localStorage.setItem("username", username ?? undefined);
                    showToast({
                        type: "success",
                        content: <>登录成功</>,
                    });
                    const role = parseToken(token);
                    if (role === "admin") {
                        setTimeout(() => {
                            navigate("/admin");
                        }, 500);
                    } else if (role === "user") {
                        setTimeout(() => {
                            navigate("/select");
                        }, 500);
                    } else {
                        showToast({
                            type: "error",
                            content: <>登录失败，用户角色错误</>,
                        });
                    }
                })
                .catch((error) => {
                    console.log(error);
                    showToast({
                        type: "error",
                        content: <>登录失败，用户名和密码错误</>,
                    });
                });
        }
    };
};
