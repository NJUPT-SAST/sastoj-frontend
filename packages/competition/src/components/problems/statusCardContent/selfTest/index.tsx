
import { useSelfEditor } from "../../../../hooks/useSelfEditor";
import CodeEditor from "../../../codeEditor";
import styles from "./index.module.scss";
export const SelfTest = () => {
  const { handleCodeEditor, defaultValue } = useSelfEditor()
  return (
    <div className={styles["self-test-container"]}>
      <div className={styles["self-test-code"]}>
        <CodeEditor
          onUpdate={handleCodeEditor}
          defaultValue={defaultValue}
        />
      </div>
      <div className={styles.divider} />
      <div className={styles["self-test-result-show"]}>
        <span></span>
      </div>
    </div>
  );
};
