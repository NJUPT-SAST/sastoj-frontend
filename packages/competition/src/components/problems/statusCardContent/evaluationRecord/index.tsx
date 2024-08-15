import styles from "./index.module.scss";
import { Badge } from "@ui-aurora/react";
import { useSubmissons } from "../../../../hooks/useSubmissions";
import { StatusTag } from "../../statusTag";


export const EvaluationRecord = () => {
  const data = useSubmissons()
  if (!data) {
    return (
      <div className={styles["loading-container"]}>
        <div className={styles["loading-spinner"]}></div>
      </div>
    );
  }
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
              <span>状态：<StatusTag status={item?.status} /></span>
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
