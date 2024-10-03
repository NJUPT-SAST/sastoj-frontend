import { Card } from "@ui-aurora/react";

import SelectLayout from "./layout";
import styles from "./page.module.scss";
import EnterButton from "../../components/select/enterButton";
import { useSwrGetContests } from "../../swrHooks/contests";

const Select = () => {
  const { data } = useSwrGetContests();
  data&&localStorage.setItem('contests', JSON.stringify(data?.contests));
  

  return (
    <SelectLayout>
      <div className={styles["select-boxes"]}>
        {data?.contests.map((item) => {
          return (
            <Card
              key={item.title + item.id}
              className={styles["select-item"]}
              header={
                <div className={styles["item-title"]}>
                  <span>南京邮电大学科学技术协会</span>
                  <div className={styles["competition-title"]}>
                    <span>{item.title}</span>
                  </div>
                </div>
              }
              footer={
                <div className={styles["btn-box"]}>
                  <EnterButton contestId={item.id} />
                </div>
              }
              content={
                <div className={styles["item-content"]}>
                  <span>{item.description}</span>
                </div>
              }
            />
          );
        })}
      </div>
    </SelectLayout>
  );
};

export default Select;
