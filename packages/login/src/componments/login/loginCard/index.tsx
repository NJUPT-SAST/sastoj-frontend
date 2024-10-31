import { Card } from "@ui-aurora/react";
import Logo from "../logo/index";
import styles from "./index.module.scss";
import LoginCardContent from "./loginCardContent";

const LoginCard = () => {
  return (
    <Card
      className={styles.card}
      size="small"
      header={
        <div className={styles["header-container"]}>
          <Logo width={300}></Logo>
          <span>Login here</span>
        </div>
      }
      content={<LoginCardContent />}
      footer={null}
      shadow="regular"
    />
  );
};

export default LoginCard;
