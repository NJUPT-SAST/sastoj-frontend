import { Button, Card } from "@sast/oj-ui";
import Logo from "../../logo";
import styles from "./index.module.scss";
import LoginCardContent from "./loginCardContent";

const LoginCard = () => {
  return (
    <>
      <Card
        className={styles.card}
        size="small"
        header={
          <>
            <div className={styles["header-container"]}>
              <Logo width={300}></Logo>
              <span>LOGIN HERE</span>
            </div>
          </>
        }
        mainContent={<LoginCardContent />}
        footer={
          <>
            <div className={styles["footer-container"]}>
              <div className={styles["divider-container"]}>
                <div />
                <span>Or continue with</span>
                <div />
              </div>
              <div className={styles["other-way-container"]}>
                <Button color="border">
                  <span>Link</span>
                </Button>
                <Button color="border">
                  <span>Link</span>
                </Button>
                <Button color="border">
                  <span>Link</span>
                </Button>
              </div>
            </div>
          </>
        }
      ></Card>
    </>
  );
};

export default LoginCard;
