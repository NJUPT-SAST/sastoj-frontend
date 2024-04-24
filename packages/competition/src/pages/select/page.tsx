import { useEffect } from "react";
import SelectLayout from "./layout";
import { useNavigate } from "react-router-dom";
import EnterButton from "../../components/select/enterButton";

import styles from "./page.module.scss";
import { Button, Card } from "@ui-aurora/react";
import { Dialog } from "@ui-aurora/react";

const Select = () => {
  const navigate = useNavigate();
  useEffect(() => {
    //get compitions
    console.log("比赛列表");
  }, []);
  return (
    <SelectLayout>
      <div className={styles["select-boxs"]}>
        <Dialog>Enter Botton</Dialog>
        <Card
          padding={20}
          className={styles["select-item"]}
          header={null}
          footer={null}
          mainContent={
            <>
              <div className={styles["item-title"]}>
                <div>SAST</div>
                <div className={styles["competition-title"]}>SAST OJ</div>
              </div>
              <div className={styles["item-content"]}>
                THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE
                SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ .
                THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE
                SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ .
                THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE
                SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ .
                THIS IS THE SAST OF OJ .
              </div>
              <div className={styles["btn-box"]}>
                <Button
                  onClick={() => {
                    navigate("/Competition/id=1");
                  }}
                  className={styles["enter-btn"]}
                  size="small"
                  color="secondary"
                >
                  ENTER
                </Button>
              </div>
            </>
          }
        ></Card>

        <Card
          padding={20}
          className={styles["select-item"]}
          header={null}
          footer={null}
          mainContent={
            <>
              <div className={styles["item-title"]}>
                <div>SAST</div>
                <div className={styles["competition-title"]}>SAST OJ</div>
              </div>
              <div className={styles["item-content"]}>
                THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE
                SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ .
                THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE
                SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ .
                THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE
                SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ .
                THIS IS THE SAST OF OJ .
              </div>
              <EnterButton competionId={1} />
            </>
          }
        ></Card>

        <Card
          padding={12}
          className={styles["select-item"]}
          header={
            <div className={styles["item-title"]}>
              <span>SAST</span>
              <div className={styles["competition-title"]}>
                <span>SAST OJ</span>
              </div>
            </div>
          }
          footer={
            <div className={styles["btn-box"]}>
              <Button
                className={styles["enter-btn"]}
                color="secondary"
                size="small"
              >
                进入比赛
              </Button>
            </div>
          }
          mainContent={
            <div className={styles["item-content"]}>
              <span>
                THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE
                SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ .
                THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE
                SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ .
                THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE
                SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ .
                THIS IS THE SAST OF OJ . IS THE SAST OF OJ . THIS IS THE SAST OF
                OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS
                THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ
                . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE
                SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ .
                THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE
                SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ .
                THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE
                SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ .
                THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE
                SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ .
                THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE
                SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ .
                THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE
                SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ .
                THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE
                SAST OF OJ . THIS
              </span>
            </div>
          }
        ></Card>
      </div>
    </SelectLayout>
  );
};

export default Select;
