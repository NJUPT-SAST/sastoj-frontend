import { Card } from "@ui-aurora/react";
import styles from "./page.module.scss";
import Announcement from "../../components/about/announcement";
import Information from "../../components/about/information";
import Time from "../../components/about/time";
const About = () => {
  return (
    <div className={styles["about-container"]}>
      <div className={styles["about-content"]}>
        <Card
          className={styles["announcement-card"]}
          shadow="regular"
          header={null}
          footer={null}
          padding={0}
          mainContent={<Announcement />}
        />
        <div className={styles["right-area"]}>
          <Card
            className={styles["information-card"]}
            shadow="regular"
            padding={0}
            header={null}
            footer={null}
            mainContent={<Information />}
          />
          <Card
            className={styles["time-card"]}
            shadow="regular"
            padding={0}
            header={null}
            footer={null}
            mainContent={<Time />}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
