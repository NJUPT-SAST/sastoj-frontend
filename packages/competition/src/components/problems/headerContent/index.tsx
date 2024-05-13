import { CirclePlay, ListCollapse, Send } from "lucide-react";
import styles from "./index.module.scss";
import { Button } from "@ui-aurora/react";
import { ProblemsSheet } from "../problemsSheet";
import { useState } from "react";
import { useSelfTest } from "../../../hooks/useSelfTest";
// import { useSelfTest } from "../../../swrHooks/selfTest";
export const HeaderContent = () => {
  const [sheetVisible, setSheetVisible] = useState<boolean>(false);
  const selfTest = useSelfTest();

  return (
    <div className={styles["header-content-container"]}>
      <Button
        className={styles["run-button"]}
        size="small"
        color="border"
        onClick={() => setSheetVisible(true)}
      >
        <ListCollapse />
        <span>题目列表</span>
      </Button>
      <div className={styles["run-buttons-container"]}>
        <Button
          className={styles["run-button"]}
          size="small"
          color="border"
          onClick={() => selfTest()}
        >
          <CirclePlay />
          <span>自测</span>
        </Button>
        <Button className={styles["run-button"]} size="small" color="border">
          <Send />
          <span>提交</span>
        </Button>
        <ProblemsSheet
          visible={sheetVisible}
          onCancel={() => setSheetVisible(false)}
        />
      </div>
    </div>
  );
};
