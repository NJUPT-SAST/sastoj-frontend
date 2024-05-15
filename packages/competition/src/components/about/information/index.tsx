import { Badge } from "@ui-aurora/react";
import styles from "./index.module.scss";
import {
  getType,
  getStatus,
  handleDate,
  getDuration,
} from "../../../utils/aboutHandleData";

export interface InformationProps {
  endTime?: string;
  extraTime?: number;
  startTime?: string;
  status?: number;
  type?: number;
}

const Information = (data: InformationProps) => {
  const typeValue = getType(data?.type);
  const stateValue = getStatus(data?.status);

  const start_Time = handleDate(data?.startTime);
  const end_Time = handleDate(data?.endTime);

  const duration = getDuration(data?.startTime, data?.endTime);

  return (
    <div className={styles["information-container"]}>
      {/* <div>
        <span>比赛编号</span>
        <span>3902810</span>
      </div> */}
      <div>
        <span>举办者</span>
        <span>SASTOJ</span>
      </div>
      <div>
        <span>比赛类型</span>
        <div>
          <Badge content={typeValue} />
        </div>
      </div>
      <div>
        <span>比赛状态</span>
        <div>
          <Badge content={stateValue[0]} type={stateValue[1]} />
        </div>
      </div>
      <div>
        <span>开始时间</span>
        <span>{start_Time}</span>
      </div>
      <div>
        <span>结束时间</span>
        <span>{end_Time}</span>
      </div>
      <div>
        <span>比赛时间</span>
        <span>{duration}h</span>
      </div>
    </div>
  );
};

export default Information;
