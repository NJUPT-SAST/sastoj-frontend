import styles from "./page.module.scss";
import error404 from "../../assets/404.png";
import { Button } from "@ui-aurora/react";
import { useNavigate } from "react-router-dom";
const Error = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles["error-container"]}>
        <h1 className={styles["error-span-1"]}>Oops!</h1>
        <h1 className={styles["error-span-2"]}>You are lost!</h1>
        <div className={styles["error-img-container"]}>
          <img src={error404} alt="404" />
        </div>
        <Button
          color="ghost"
          className={styles["error-button"]}
          onClick={() => navigate(-1)}
        >
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.19794 14.9478L24.6431 14.9478C26.94 14.9478 28.8021 16.8099 28.8021 19.1068L28.8021 20.6325C28.8021 22.9294 26.94 24.7915 24.6431 24.7915L10.2084 24.7915"
              strokeWidth="2.08134"
              strokeLinejoin="round"
            />
            <path
              d="M9.84376 10.5728C8.13521 12.2813 7.1773 13.2392 5.46876 14.9478L9.84376 19.3228"
              strokeWidth="2.08134"
              strokeLinejoin="round"
            />
          </svg>
          <span>Go Back</span>
        </Button>
      </div>
    </>
  );
};

export default Error;
