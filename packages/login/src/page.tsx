import LoginCard from "./componments/login/loginCard";
import WebsiteDescription from "./componments/login/websiteDescription";
import styles from "./page.module.scss";

const Login = () => {
  return (
    <div className={styles["login-background"]}>
      <div className={styles["login-card-container"]}>
        <WebsiteDescription />
        <LoginCard />
      </div>
    </div>
  );
};

export default Login;
