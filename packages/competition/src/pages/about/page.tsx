import { Card } from "@ui-aurora/react";
import styles from "./page.module.scss";
import Announcement from "../../components/about/announcement";
import { AnnouncementSkelecton } from "../../components/skelecton/about";
import Information from "../../components/about/information";
// import Time from "../../components/about/time";
import { useMsg } from "../../stores/useMsg";
import { useCasedata } from "../../hooks/useCasedata";
import { RoutetoLibrary } from "../../components/route/RoutetoLibrary/RoutetoLibrary";

const About = () => {
  const contestId = localStorage.getItem("contestId");
  const data = contestId ? useCasedata(contestId) : null;
  const setTitle = useMsg(state => state.setTitle)
  data && setTitle(data?.title)
  
  

  return (
    <div className={styles["about-container"]}>
      <div className={styles["about-content"]}>
        <Card
          className={styles["announcement-card"]}
          shadow="regular"
          header={null}
          footer={<RoutetoLibrary />}
          padding={0}
          mainContent={
            (data ? <Announcement title={data?.title} description={data?.description} /> : <AnnouncementSkelecton />)
          }
        />
        <div className={styles["right-area"]}>
          <Card
            className={styles["information-card"]}
            shadow="regular"
            padding={0}
            header={null}
            footer={null}
            mainContent={<Information {...data} />}
          />
          {/* <Card
            className={styles["time-card"]}
            shadow="regular"
            padding={0}
            header={null}
            footer={null}
            mainContent={<Time />}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default About;
