import { Button, Dialog } from "@ui-aurora/react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useState } from "react";

import styles from "./index.module.scss";

interface EnterButtonProps {
  competionId: number;
}

const EnterButton: React.FC<EnterButtonProps> = ({ competionId }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const navigate = useNavigate();

  const showDialog = () => {
    setVisible(true);
    console.log("打开考试规范遵守");
  };

  const handleOk = () => {
    setVisible(!visible);
    navigate("/About");
    localStorage.setItem("id", competionId.toString());
  };

  return (
    <div className={styles["btn-box"]}>
      <Button
        onClick={showDialog}
        className={styles["enter-btn"]}
        size="small"
        color="secondary"
      >
        进入比赛
      </Button>
      <Dialog
        visible={visible}
        onOk={handleOk}
        onCancel={() => {
          setVisible(false);
        }}
        // className={styles['confirm-box']}
        size="small"
        color="secondary"
        header={
          <div>
            <p style={{ fontSize: "18px", fontWeight: "bold" }}>SAST比赛准则</p>
          </div>
        }
        mainContent={
          <div className={styles["main-content"]}>
            <p
              style={{ lineHeight: 1.8, fontWeight: "650", textIndent: "2em" }}
            >
              欢迎你参加本次SAST比赛！
              在参加考试前，考生请务必查阅具体的考试规则和要求，以确保您能准确了解和遵守相关规定。在确认同意后方可进入比赛，祝您考试顺利！
            </p>
            <ul>
              <li>
                <p>考生仅允许携带A4草稿纸和笔。</p>
              </li>
              <li>
                <p>考试开始前，请将手机关机并上交给监考讲师</p>
              </li>
              <li>
                <p>考试开始后，考生不能离开考场，除非经允许。</p>
              </li>
              <li>
                <p>考试中，考生不能使用互联网或任何在线资源。</p>
              </li>
              <li>
                <p>
                  考试中，考生不能与其他考生交谈或沟通，包括口头、书面或电子方式
                </p>
              </li>
              <li>
                <p>考试中，考生不能抄袭、作弊或从其他来源获取非法帮助。</p>
              </li>
            </ul>
          </div>
        }
      />
    </div>
  );
};

export default EnterButton;
