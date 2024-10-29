import LoginCard from "../../components/login/loginCard";
import WebsiteDescription from "../../components/login/websiteDescription";
import styles from "./page.module.scss";

export default function Login() {
  return (
    <div className={styles["login-background"]}>
      <div className={styles["login-card-container"]}>
        <WebsiteDescription />
        <LoginCard />
      </div>
    </div>
  );
}
