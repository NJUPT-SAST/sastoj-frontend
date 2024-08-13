import { useParams } from "react-router-dom";
// import { useDetailStore } from "../../../../stores/useDetailStore";
import styles from "./index.module.scss";
import { useSwrHistorySubmits } from "../../../../swrHooks/problem";
import { Badge } from "@ui-aurora/react";

export const EvaluationRecord = () => {
  // const detail = useDetailStore((state) => state.detail);
  const contestId = localStorage.getItem("contestId");
  const { problemId } = useParams();
  const { data } = useSwrHistorySubmits(contestId as unknown as string, problemId as unknown as string)


  return (
    <div className={styles["evaluation-record-container"]}>
      {data?.submissions ? data?.submissions.map((item, index) => {
        return (
          <div className={styles["evaluation-record-item"]} key={index}>
            <div className={styles['submit-time']}>
              提交时间:{item.createdAt}
            </div>
            <div className={styles['submit-description']}>
              {/* <span>#id:{item.id}</span> */}
              <span>状态：{item.status}</span>
              <span>分数：<Badge content={item.point.toString()} size="medium" type="info" shadow="small" /></span>
              <span>语言:{item.language}</span>
            </div>
            {/* <span>time:{item.totalTime}</span>
            <span>memory:{item.maxMemory}</span> */}
          </div>
        );
      }) : ''}
    </div>
  );
};
