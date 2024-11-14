import { Card } from "@ui-aurora/react";
import styles from "./page.module.scss";
import { RankTable } from "../../components/rank/rankTable";

const Rank = () => {
  return (
    <div className={styles["rank-container"]}>
      <div className={styles["rank-content"]} style={{ height: "100%" }}>
        <Card
          header={null}
          footer={null}
          content={<RankTable />}
          className={styles["rank-lists-container"]}
          shadow="regular"
          style={{ height: "100%" }}
        ></Card>
      </div>
    </div>
  );
};

export default Rank;
