import { Card } from "@ui-aurora/react";
import Logo from "../../logo";
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
          <span>LOGIN HERE</span>
        </div>
      }
      mainContent={<LoginCardContent />}
      footer={null}
    />
  );
};

export default LoginCard;
