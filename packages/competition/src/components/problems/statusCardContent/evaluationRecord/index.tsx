import styles from "./index.module.scss";
import { Badge } from "@ui-aurora/react";
import { useSubmissons } from "../../../../hooks/useSubmissions";
import { StatusTag } from "../../statusTag";
import moment from "moment";
import { Empty } from "../../../empty";

export const EvaluationRecord = () => {
  const data = useSubmissons();

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
                    type="info"
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
