import styles from "./icon.module.scss";
const Success = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        className={styles.icon}
      >
        <polyline
          className={styles.success}
          fill="none"
          stroke="white"
          strokeWidth="4"
          points="5 13 9 18 19 8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

export default Success;
