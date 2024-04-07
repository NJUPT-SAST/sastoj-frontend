import LoginCard from "../../components/login/loginCard";
import styles from "./page.module.scss";

const Login = () => {
  return (
    <div className={styles["login-background"]}>
      <div className={styles["login-card-container"]}>
        <LoginCard></LoginCard>
      </div>
    </div>
  );
};

export default Login;
