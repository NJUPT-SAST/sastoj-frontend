import styles from "./index.module.scss";

export const handleMemory = <T extends number | undefined>(
  value: T,
): T extends number ? string : undefined => {
  if (value) {
    const memory = (value * 8) / 1000000;
    return memory.toFixed(2) as T extends number ? string : undefined;
  }
  return undefined as T extends number ? string : undefined;
};

export const handleTime = (value: number): string => {
  const time = value / 1000000;
  return time.toFixed(2);
};

export const SelfSuccess = ({
  time,
  memory,
  stdout,
}: {
  time: number | undefined;
  memory: number | undefined;
  stdout: string | undefined;
}) => {
  return (
    <div className={styles.resultContainer}>
      <div className={styles.statusHeader}>编译通过</div>
      <div className={styles.resultContent}>
        <p>
          执行用时: <span>{time ? `${handleTime(time)} ms` : "N/A"}</span>
        </p>
        <p>
          内存占用: <span>{`${handleMemory(memory)} mb` || "N/A"}</span>
        </p>
        <p>输出结果:</p>
        <pre className={styles.output}>{stdout}</pre>
      </div>
    </div>
  );
};
