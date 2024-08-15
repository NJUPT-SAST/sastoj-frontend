import { CirclePlay, ListCollapse, Send } from "lucide-react";
import styles from "./index.module.scss";
import { Button } from "@ui-aurora/react";
import { ProblemsSheet } from "../problemsSheet";
import { useState } from "react";
import { useSubmited } from "../../../hooks/useSubmit";
import { useSelfTest } from "../../../hooks/useSelfTest";

export const HeaderContent = () => {
  const [sheetVisible, setSheetVisible] = useState<boolean>(false);
  const selfTest = useSelfTest();
  const submit = useSubmited();

  return (
    <div className={styles["header-content-container"]}>

      <Button
        className={styles["run-button"]}
        size="medium"
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
        <Button
          className={styles["run-button"]}
          size="small"
          color="border"
          onClick={() => submit()}
        >
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
