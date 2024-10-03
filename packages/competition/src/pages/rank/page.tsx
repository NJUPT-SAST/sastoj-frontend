import { Card } from "@ui-aurora/react";
import styles from "./page.module.scss";

const Rank = () => {
  return (
    <div className={styles["rank-container"]}>
      <div className={styles["rank-content"]}>
        <Card
          header={null}
          footer={null}
          content={"This is Rank (todo)!"}
          className={styles["rank-lists-container"]}
          shadow="regular"
        ></Card>
      </div>
    </div>
  );
};

export default Rank;
