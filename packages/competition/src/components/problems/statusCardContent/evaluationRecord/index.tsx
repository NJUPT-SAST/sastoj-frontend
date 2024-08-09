import { useDetailStore } from "../../../../stores/useDetailStore";
import styles from "./index.module.scss";

export const EvaluationRecord = () => {
  const detail = useDetailStore((state) => state.detail);
  console.log('<<<<<<<');
  console.log(detail);

  return (
    <div className={styles["evaluation-record-container"]}>
      {detail.map((item, index) => {
        return (
          <div className={styles["evaluation-record-item"]} key={index}>
            <span>#id:{item.id}</span>
            <span>status:{item.status}</span>
            <span>point：{item.point}</span>
            <span>time:{item.totalTime}</span>
            <span>memory:{item.maxMemory}</span>
          </div>
        );
      })}
    </div>
  );
};
