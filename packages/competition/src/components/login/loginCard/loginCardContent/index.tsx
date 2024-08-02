import { Input, Button } from "@ui-aurora/react";
import styles from "./index.module.scss";
import { useState } from "react";
import { useLogin } from "../../../../hooks/useLogin";

const LoginCardContent = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const login = useLogin();

  return (
    <div className={styles["main-content-container"]}>
      <Input
        label="昵称"
        isFillFather={true}
        id="userName"
        value={username}
        onchange={(value) => setUsername(value)}
        size={20}
      ></Input>
      <Input
        mode="password"
        label="密码"
        isFillFather={true}
        value={password}
        onchange={(value) => setPassword(value)}
        id="password"
        size={20}
      ></Input>
      <div className={styles["button-container"]}>
        <Button
          className={styles["sign-in-button"]}
          onClick={() => login(username, password)}
          disabledShadow={false}
        >
          <span>Sign In</span>
        </Button>
      </div>
    </div>
  );
};

export default LoginCardContent;
