/* eslint-disable */
import { Card } from "@ui-aurora/react";
import styles from "./page.module.scss";
import { AnnouncementSkelecton } from "../../components/skelecton/about";
import Information from "../../components/about/information";
// import Time from "../../components/about/time";
import { useMsg } from "../../stores/useMsg";
import { useCasedata } from "../../hooks/useCasedata";
import { RouteLibrary } from "../../components/route/RoutetoLibrary/RoutetoLibrary";

const About = () => {
  const contestId = localStorage.getItem("contestId");
  const data = contestId ? useCasedata(contestId) : null;
  const setTitle = useMsg((state) => state.setTitle);
  data && setTitle(data?.title);

  return (
    <div className={styles["about-container"]}>
      <div className={styles["about-content"]}>
        <Card
          className={styles["announcement-card"]}
          shadow="regular"
          header={<h2>{data?.title}</h2>}
          footer={
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row-reverse",
              }}
            >
              <RouteLibrary />
            </div>
          }
          content={
            data ? <span>{data?.description}</span> : <AnnouncementSkelecton />
          }
        />
        <div className={styles["right-area"]}>
          <Card
            className={styles["information-card"]}
            shadow="regular"
            header={null}
            footer={null}
            content={<Information {...data} />}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
