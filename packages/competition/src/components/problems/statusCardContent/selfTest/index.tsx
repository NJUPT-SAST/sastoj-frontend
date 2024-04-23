import CodeEditor from "../../../codeEditor";
import styles from "./index.module.scss";
export const SelfTest = () => {
  return (
    <div className={styles["self-test-container"]}>
      <div className={styles["self-test-code"]}>
        <CodeEditor />
      </div>
      <div className={styles["self-test-result-show"]}>
        <span></span>
      </div>
    </div>
  );
};
