import styles from "./page.module.scss";
import error404 from "../../assets/404.png";
import { Button } from "@ui-aurora/react";
import { useNavigate } from "react-router-dom";
import { ArrowBigLeft } from "lucide-react";
const Error = () => {
  const navigate = useNavigate();
  return (
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
        <ArrowBigLeft />
        <span>Go Back</span>
      </Button>
    </div>
  );
};

export default Error;
