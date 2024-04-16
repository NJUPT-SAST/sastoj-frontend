import styles from "./index.module.scss";

const WebsiteDescription = () => {
  return (
    <div className={styles["website-description"]}>
      <span className={styles.title}>
        SAST OJ:
        <br />
        A Modern Online Judge
        <br />
        developed by
        <br />
        Student Association of Sci & Tech (SAST)
      </span>
    </div>
  );
};

export default WebsiteDescription;
