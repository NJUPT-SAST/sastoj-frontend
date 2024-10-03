import { Input, Button } from "@ui-aurora/react";
import styles from "./index.module.scss";
import { useState } from "react";
import { useLogin } from "../../../../hooks/useLogin";
import { KeySquare, User } from "lucide-react";

const LoginCardContent = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const login = useLogin();

  return (
    <div className={styles["main-content-container"]}>
      <Input
        label={<User size={22} />}
        id={`userName-${Math.random()}`}
        name={`userName-${Math.random()}`}
        value={username}
        onChange={(value) => setUsername(value)}
        size={"medium"}
        autoComplete="off"
      />
      <Input
        type="password"
        label={<KeySquare size={22} />}
        value={password}
        onChange={(value) => setPassword(value)}
        id={`password-${Math.random()}`}
        name={`password-${Math.random()}`}
        size={"medium"}
        autoComplete="off"
      />
      <div className={styles["button-container"]}>
        <Button
          className={styles["sign-in-button"]}
          onClick={() => login(username, password)}
        >
          <span>Sign In</span>
        </Button>
      </div>
    </div>
  );
};

export default LoginCardContent;
