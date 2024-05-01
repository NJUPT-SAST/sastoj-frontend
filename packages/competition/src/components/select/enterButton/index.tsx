import React from "react";
import { Button, Checkbox, Dialog, showToast } from "@ui-aurora/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import styles from "./index.module.scss";

interface EnterButtonProps {
  competitionId: number;
}

const EnterButton: React.FC<EnterButtonProps> = ({ competitionId }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleOk = () => {
    if (!isChecked) {
      showToast({
        type: "error",
        content: <span>请勾选考试条约</span>,
      });
    } else {
      navigate("/About");
      localStorage.setItem("competitionId", competitionId.toString());
      setVisible(false);
    }
  };

  return (
    <>
      <div className={styles["btn-box"]}>
        <Button onClick={() => setVisible(true)} size="small" color="secondary">
          进入比赛
        </Button>
      </div>
      <Dialog
        className={styles.dialog}
        visible={visible}
        onOk={handleOk}
        onCancel={() => setVisible(false)}
        size="medium"
        color="secondary"
        header={<span className={styles["dialog-title"]}>比赛准则</span>}
        mainContent={
          <div className={styles["dialog-content"]}>
            <span>
              欢迎你参加本次比赛！在参加考试前，考生请务必查阅具体的考试规则和要求，以确保您能准确了解和遵守相关规定。在确认同意后方可进入比赛，祝您考试顺利！
            </span>
            <ul>
              <li>
                <span>考生仅允许携带A4草稿纸和笔。</span>
              </li>
              <li>
                <span>考试开始前，请将手机关机并上交给监考讲师</span>
              </li>
              <li>
                <span>考试开始后，考生不能离开考场，除非经允许。</span>
              </li>
              <li>
                <span>考试中，考生不能使用互联网或任何在线资源。</span>
              </li>
            </ul>
          </div>
        }
        footer={
          <div className={styles["dialog-footer"]}>
            <Checkbox
              value="checked"
              label="我已阅读准则并严格遵守"
              defaultChecked={isChecked}
              onChecked={(value) => {
                value === "add" ? setIsChecked(true) : setIsChecked(false);
              }}
            />
            <Button onClick={handleOk}>进入比赛</Button>
          </div>
        }
      />
    </>
  );
};

export default EnterButton;
