import { lazy, memo, Suspense } from "react";
import { useSelfEditor } from "../../../../hooks/useSelfEditor";
import { SelfResult } from "../../selfResult";
import styles from "./index.module.scss";
const MonacoEditor = lazy(() => import("../../../monacoEditor"));

export const SelfTestComponent = () => {
  const { handleCodeEditor, defaultValue } = useSelfEditor();
  return (
    <div className={styles["self-test-container"]}>
      <div className={styles["self-test-code"]}>
        {/* <CodeEditor
          onUpdate={handleCodeEditor}
          defaultValue={defaultValue}
        /> */}
        <Suspense fallback={<>Loading...</>}>
          <MonacoEditor
            onUpdate={handleCodeEditor}
            defaultValue={defaultValue}
          ></MonacoEditor>
        </Suspense>
      </div>
      <div className={styles.divider} />
      <div className={styles["self-test-result-show"]}>
        <SelfResult />
      </div>
    </div>
  );
};

export const SelfTest = memo(SelfTestComponent);
