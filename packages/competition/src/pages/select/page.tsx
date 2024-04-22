import { useEffect } from "react";
import SelectLayout from "./layout";
import styles from './page.module.scss'
import { Button, Card } from "@ui-aurora/react";

const Select = () => {
  useEffect(() => {
    //get compitions
    console.log("比赛列表");

  }, [])
  return (
    <SelectLayout>
      <div className={styles['select-boxs']}>
        <Card
          padding={20} className={styles['select-item']} header={null} footer={null}
          mainContent={<>
            <div className={styles['item-title']}>
              <div>SAST</div>
              <div className={styles['competition-title']}>SAST OJ</div>
            </div>
            <div className={styles['item-content']}>
              THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ .
            </div>
            <div className={styles['btn-box']}>
              <Button className={styles['enter-btn']} size="small" color="secondary">ENTER</Button>
            </div>
          </>}
        >
        </Card>
        <Card
          padding={20} className={styles['select-item']} header={null} footer={null}
          mainContent={<>
            <div className={styles['item-title']}>
              <div>SAST</div>
              <div className={styles['competition-title']}>SAST OJ</div>
            </div>
            <div className={styles['item-content']}>
              THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ .
            </div>
            <div className={styles['btn-box']}>
              <Button className={styles['enter-btn']} size="small" color="secondary">ENTER</Button>
            </div>
          </>}
        >
        </Card>
        <Card
          padding={20} className={styles['select-item']} header={null} footer={null}
          mainContent={<>
            <div className={styles['item-title']}>
              <div>SAST</div>
              <div className={styles['competition-title']}>SAST OJ</div>
            </div>
            <div className={styles['item-content']}>
              THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ .
            </div>
            <div className={styles['btn-box']}>
              <Button className={styles['enter-btn']} size="small" color="secondary">ENTER</Button>
            </div>
          </>}
        >
        </Card>
        <Card
          padding={20} className={styles['select-item']} header={null} footer={null}
          mainContent={<>
            <div className={styles['item-title']}>
              <div>SAST</div>
              <div className={styles['competition-title']}>SAST OJ</div>
            </div>
            <div className={styles['item-content']}>
              THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ . THIS IS THE SAST OF OJ .
            </div>
            <div className={styles['btn-box']}>
              <Button className={styles['enter-btn']} size="small" color="secondary">ENTER</Button>
            </div>
          </>}
        >
        </Card>
      </div>
    </SelectLayout>
  );
};

export default Select;
