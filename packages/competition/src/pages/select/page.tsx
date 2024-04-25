import { Button, Card } from "@ui-aurora/react";

import SelectLayout from "./layout";
import styles from "./page.module.scss";
import EnterButton from "../../components/select/enterButton";

const Select = () => {
  return (
    <SelectLayout>
      <div className={styles["select-boxes"]}>
        <Card
          padding={15}
          className={styles["select-item"]}
          header={
            <div className={styles["item-title"]}>
              <span>创意艺术协会</span>
              <div className={styles["competition-title"]}>
                <span>创意设计大赛</span>
              </div>
            </div>
          }
          footer={
            <div className={styles["btn-box"]}>
              <EnterButton competitionId={1} />
            </div>
          }
          mainContent={
            <div className={styles["item-content"]}>
              <span>
                创意设计大赛是一个面向创意设计领域的比赛活动。参赛者可以展示自己的设计才华，创造出独特而有创意的作品。比赛涵盖平面设计、插图、动画、产品设计等多个类别。我们鼓励参赛者展现个人风格和创新思维，同时提供了宝贵的机会与其他设计师交流和学习。
              </span>
            </div>
          }
        ></Card>
        <Card
          padding={15}
          className={styles["select-item"]}
          header={
            <div className={styles["item-title"]}>
              <span>编程之友社区</span>
              <div className={styles["competition-title"]}>
                <span>编程挑战赛</span>
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
                编程挑战赛是一个面向编程爱好者的比赛活动。参赛者将面临一系列有趣而富有挑战性的编程题目，涵盖算法、数据结构、编程逻辑等方面。比赛旨在提供一个展示编程技能和交流经验的平台。无论你是新手还是经验丰富的程序员，都欢迎加入这场激动人心的编程挑战赛！
              </span>
            </div>
          }
        ></Card>
        <Card
          padding={15}
          className={styles["select-item"]}
          header={
            <div className={styles["item-title"]}>
              <span>体育协会</span>
              <div className={styles["competition-title"]}>
                <span>体育竞技锦标赛</span>
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
                体育竞技锦标赛是一个激烈而精彩的体育比赛活动。我们将举办多个项目，包括足球、篮球、田径、游泳等。无论你是热爱运动的业余爱好者还是专业运动员，都可以参加这场竞技锦标赛。比赛旨在促进体育运动的发展，提倡团队合作和健康生活方式。加入我们，展示你的体育才能，与其他运动爱好者一起竞技。
              </span>
            </div>
          }
        ></Card>
        <Card
          padding={15}
          className={styles["select-item"]}
          header={
            <div className={styles["item-title"]}>
              <span>编程之友社区</span>
              <div className={styles["competition-title"]}>
                <span>编程挑战赛</span>
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
                编程挑战赛是一个面向编程爱好者的比赛活动。参赛者将面临一系列有趣而富有挑战性的编程题目，涵盖算法、数据结构、编程逻辑等方面。比赛旨在提供一个展示编程技能和交流经验的平台。无论你是新手还是经验丰富的程序员，都欢迎加入这场激动人心的编程挑战赛！
              </span>
            </div>
          }
        ></Card>
      </div>
    </SelectLayout>
  );
};

export default Select;
