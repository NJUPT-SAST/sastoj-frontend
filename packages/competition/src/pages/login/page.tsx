import LoginCard from "../../components/login/loginCard";
import styles from "./page.module.scss";
import { Button } from "@sast/oj-ui-universal";

const Login = () => {
  return (
    <>
      <div className={styles["login-background"]}>
        <div className={styles["login-card-container"]}>
          <LoginCard></LoginCard>
          <Button
            _onclick={() => {
              console.log("click");
            }}
          >
            Click me
          </Button>
          <button
            onClick={() => {
              console.log("click");
            }}
          >
            click
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
