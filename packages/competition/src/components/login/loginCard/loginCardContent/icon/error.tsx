import styles from "./icon.module.scss";
const Error = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
        className={styles.icon}
      >
        <line
          className={styles.cross1}
          x1="5"
          y1="5"
          x2="19"
          y2="19"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          className={styles.cross2}
          x1="19"
          y1="5"
          x2="5"
          y2="19"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};

export default Error;
