import { CirclePlay, ListCollapse, Send } from "lucide-react";
import styles from "./index.module.scss";
import { Button } from "@ui-aurora/react";
export const HeaderContent = () => {
  return (
    <div className={styles["header-content-container"]}>
      <Button className={styles["run-button"]} size="small" color="border">
        <ListCollapse />
        <span>题目列表</span>
      </Button>
      <div className={styles["run-buttons-container"]}>
        <Button className={styles["run-button"]} size="small" color="border">
          <CirclePlay />
          <span>自测</span>
        </Button>
        <Button className={styles["run-button"]} size="small" color="border">
          <Send />
          <span>提交</span>
        </Button>
      </div>
    </div>
  );
};
