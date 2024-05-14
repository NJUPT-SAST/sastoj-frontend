// import { useDetailStore } from "../../../../stores/useDetailStore";
import styles from "./index.module.scss";

export const EvaluationRecord = () => {
  // const detail = useDetailStore((state) => state.detail);
  return (
    <div className={styles["evaluation-record-container"]}>
      <div className={styles["evaluation-record-item"]}>
        <span>#id</span>
        <span>state:right</span>
        <span>point:19</span>
        <span>time:20</span>
        <span>memory:290mb</span>
      </div>
      {/* {detail.map((item, index) => {
          // return <span key={index}>{item.maxMemory}</span>;
        })} */}
    </div>
  );
};
