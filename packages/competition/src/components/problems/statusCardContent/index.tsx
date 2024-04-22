import { Flag, PencilLine } from "lucide-react";
import styles from "./index.module.scss";
import { Button } from "@ui-aurora/react";

export const StatusCardContent = () => {
  return (
    <div className={styles["status-card-container"]}>
      <div className={styles["status-card-header"]}>
        <Button size="small" color="ghost">
          <PencilLine size={16} />
          <span>自测记录</span>
        </Button>
        <Button size="small" color="ghost">
          <Flag size={16} />
          <span>评测记录</span>
        </Button>
      </div>
      <div className={styles.divider}></div>
      <div className={styles["status-card-container"]}>
        {/* <Carousel></Carousel> */}
      </div>
    </div>
  );
};
