import styles from "./index.module.scss";
import { Badge } from "@ui-aurora/react";
import { useSubmissons } from "../../../../hooks/useSubmissions";
import { StatusTag } from "../../statusTag";
import moment from "moment";
import { Empty } from "../../../empty";
import { useState } from "react";
import { useCases } from "../../../../hooks/useCases";


const getPointColor = (value: number): 'error' | 'success' | 'warning' => {
  if (value == 0) return 'error'
  else if (value == 100) return 'success'
  return 'warning'
}

export const EvaluationRecord = () => {
  const data = useSubmissons();
  const [id, setID] = useState<string | null>()
  useCases(id as string)
  if (!data) {
    return (
      <div className={styles["loading-container"]}>
        <div className={styles["loading-spinner"]}></div>
      </div>
    );
  }
  return (
    <div className={styles["evaluation-record-container"]}>
      {data?.submissions.length ? (
        <>
          <div className={styles["evaluation-record-header"]}>
            <div>状态</div>
            <div>提交时间</div>
            <div>语言</div>
            <div>分数</div>
          </div>
          {data?.submissions.map((item, index) => {
            return (
              <div
                className={styles["evaluation-record-item"]}
                key={index}
                style={{
                  backgroundColor: index % 2 !== 0 ? "#f5f5f5" : "#fff",
                }}
                onClick={() => { setID(item.id) }}
              >
                <div>
                  <StatusTag status={item?.status} />
                </div>
                <div>
                  {moment(item.createdAt).format("YYYY-MM-DD HH:mm:ss")}
                </div>
                <div>{item.language}</div>
                <div>
                  <Badge
                    content={item.point.toString()}
                    size="medium"
                    type={getPointColor(item?.point)}
                    shadow="small"
                  />
                </div>
                {/* <span>time:{item.totalTime}</span>
            <span>memory:{item.maxMemory}</span> */}
              </div>
            );
          })}
        </>
      ) : (
        <Empty />
      )}
    </div>
  );
};
