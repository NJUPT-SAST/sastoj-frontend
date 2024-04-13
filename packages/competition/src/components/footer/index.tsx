import { Github } from "lucide-react";

import styles from "./index.module.scss";
import LogoNoText from "../../assets/logoNoText.svg";

const Footer = () => {
  return (
    <div className={styles["footer-container"]}>
      <div className={styles.divider} />
      <div className={styles["footer-content"]}>
        <div className={styles["footer-left-container"]}>
          <span>Powered by SAST OJ</span>
          <img src={LogoNoText} alt="logo" width={24} />
        </div>
        <div className={styles["footer-svg-container"]}>
          <a href="https://github.com/NJUPT-SAST">
            <Github size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
