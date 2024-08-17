import { useCodeEditor } from "../../../../hooks/useCodeEditor";
import { useProblemsStatusStore } from "../../../../stores/useProblemsStatusStore";
import CodeEditor from "../../../codeEditor";
import styles from "./index.module.scss";
export const SelfTest = () => {
  const { handleCodeEditor, defaultValue } = useCodeEditor(useProblemsStatusStore,'Write some tests here !!!')
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
