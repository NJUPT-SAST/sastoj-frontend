import { Badge } from "@ui-aurora/react";
import styles from "./index.module.scss";

const Information = () => {
  return (
    <div className={styles["information-container"]}>
      <div>
        <span>比赛编号</span>
        <span>3902810</span>
      </div>
      <div>
        <span>举办者</span>
        <span>SASTOJ</span>
      </div>
      <div>
        <span>比赛类型</span>
        <div>
          <Badge content="Fresh Cup" />
        </div>
      </div>
      <div>
        <span>开始时间</span>
        <span>2024-05-02 14:00</span>
      </div>
      <div>
        <span>结束时间</span>
        <span>2024-05-02 18:00</span>
      </div>
      <div>
        <span>比赛市场</span>
        <span>4.00h</span>
      </div>
    </div>
  );
};

export default Information;
