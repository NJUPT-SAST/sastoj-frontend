import { useParams } from "react-router-dom";
// import { useDetailStore } from "../../../../stores/useDetailStore";
import styles from "./index.module.scss";
import { useSwrHistorySubmits } from "../../../../swrHooks/problem";

export const EvaluationRecord = () => {
  // const detail = useDetailStore((state) => state.detail);
  const contestId = localStorage.getItem("contestId");
  const { problemId } = useParams();
  const { data } = useSwrHistorySubmits(contestId as unknown as string, problemId as unknown as string)
  console.log('<<<<<<<');
  console.log(data);


  return (
    <div className={styles["evaluation-record-container"]}>
      {/* {detail.map((item, index) => {
        return (
          <div className={styles["evaluation-record-item"]} key={index}>
            <span>#id:{item.id}</span>
            <span>status:{item.status}</span>
            <span>point：{item.point}</span>
            <span>time:{item.totalTime}</span>
            <span>memory:{item.maxMemory}</span>
          </div>
        );
      })} */}
    </div>
  );
};
