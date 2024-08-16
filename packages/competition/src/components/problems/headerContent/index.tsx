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



export const HeaderContent = () => {
  const [sheetVisible, setSheetVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false)
  const submitState = useSubmitStore((state) => state.submitState)
  const selfTest = useSelfTest();
  const submit = useSubmited();
  const handlesubmit = debounce(submit, 100)

  useEffect(() => {
    if (submitState == 'Submitting') {
      setLoading(true)
    } else {
      setLoading(false)
    }
  }, [submitState])

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
          onClick={() => handlesubmit()}
          disabled={loading}
        >
          {!loading ? <Send /> : <SumbitLoading />}
          <span>{!loading ? '提交' : '评测中'}</span>
        </Button>
        <ProblemsSheet
          visible={sheetVisible}
          onCancel={() => setSheetVisible(false)}
        />
      </div>
    </div>
  );
};
