import { memo } from "react";
import { useSelfEditor } from "../../../../hooks/useSelfEditor";
// import CodeEditor from "../../../codeEditor";
import { MonacoEditor } from "../../../monacoEditor";
import { SelfResult } from "../../selfResult";
import styles from "./index.module.scss";

export const SelfTestComponent = () => {
  const { handleCodeEditor, defaultValue } = useSelfEditor();
  return (
    <div className={styles["self-test-container"]}>
      <div className={styles["self-test-code"]}>
        {/* <CodeEditor
          onUpdate={handleCodeEditor}
          defaultValue={defaultValue}
        /> */}
        <MonacoEditor
          onUpdate={handleCodeEditor}
          defaultValue={defaultValue}
        ></MonacoEditor>
      </div>
      <div className={styles.divider} />
      <div className={styles["self-test-result-show"]}>
        <SelfResult />
      </div>
    </div>
  );
};

export const SelfTest = memo(SelfTestComponent);
