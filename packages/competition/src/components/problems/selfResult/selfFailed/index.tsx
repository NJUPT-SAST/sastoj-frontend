import styles from "./index.module.scss";

export const SelfFailed = ({
  compileMsg,
  stdout,
  stderr,
}: {
  compileMsg: string | undefined;
  stdout?: string | undefined;
  stderr: string | undefined;
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.errorTitle}>{compileMsg ?? "执行错误"}</div>
      {stdout ? (
        <div className={styles.errorMessage}>
          {stdout}
          {"\n"}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      ) : (
        ""
      )}
      <div className={styles.errorMessage}>
        {stderr}
        {"\n"}
        {/* &nbsp;&nbsp;&nbsp;&nbsp;min = Math.min(min, preSum);{'\n'} */}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
};
