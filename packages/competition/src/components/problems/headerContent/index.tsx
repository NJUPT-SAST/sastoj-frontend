import { CirclePlay, ListCollapse, Send } from "lucide-react";
import styles from "./index.module.scss";
import { Button } from "@ui-aurora/react";
import { ProblemsSheet } from "../problemsSheet";
import { useEffect, useState } from "react";
import { useSubmited } from "../../../hooks/useSubmit";
import { useSelfTest } from "../../../hooks/useSelfTest";
import { useSubmitStore } from "../../../stores/useSubmitStore";
import { SumbitLoading } from "../../loading/sumbitLoading";
import { debounce } from "../../../utils/aboutHandleData";
import { useSelfStore } from "../../../stores/useSelfSotre";

export const HeaderContent = () => {
  const [sheetVisible, setSheetVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [selfLoading, setSelfLoading] = useState<boolean>(false);
  const { submitState, startSubmit } = useSubmitStore((state) => ({
    submitState: state.submitState,
    startSubmit: state.startSubmit,
  }));
  const { selfState, startSelf } = useSelfStore((state) => ({
    selfState: state.selfState,
    startSelf: state.startSelf,
  }));
  const selfTest = useSelfTest();
  const submit = useSubmited();
  const handlesubmit = debounce(submit, 300);
  const handleself = debounce(selfTest, 300);

  useEffect(() => {
    if (submitState == "Submitting") {
      setLoading(true);
    } else {
      setTimeout(() => setLoading(false), 500);
    }
  }, [submitState]);

  useEffect(() => {
    if (selfState == "Selfing") {
      setSelfLoading(true);
    } else {
      setTimeout(() => setSelfLoading(false), 500);
    }
  }, [selfState]);

  return (
    <div className={styles["header-content-container"]}>
      <Button
        className={styles["run-button"]}
        size="small"
        color="border"
        onClick={() => setSheetVisible(true)}
        shadow="none"
      >
        <ListCollapse />
        <span>题目列表</span>
      </Button>
      <div className={styles["run-buttons-container"]}>
        <Button
          className={styles["run-button"]}
          size="small"
          color="border"
          onClick={() => {
            startSelf();
            setSelfLoading(true);
            handleself();
          }}
          disabled={selfLoading}
          shadow="none"
        >
          {!selfLoading ? <CirclePlay /> : <SumbitLoading />}
          <span>{!selfLoading ? "自测" : "自测中"}</span>
        </Button>
        <Button
          className={styles["run-button"]}
          size="small"
          color="border"
          onClick={() => {
            startSubmit();
            setLoading(true);
            handlesubmit();
          }}
          disabled={loading}
          shadow="none"
        >
          {!loading ? <Send /> : <SumbitLoading />}
          <span>{!loading ? "提交" : "评测中"}</span>
        </Button>
        <ProblemsSheet
          visible={sheetVisible}
          onCancel={() => setSheetVisible(false)}
        />
      </div>
    </div>
  );
};
