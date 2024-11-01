import styles from "./index.module.scss";

const arr = Array.from({ length: 10 }, (_, i) => i + 1);
export const SheetSkelecton = () => {
  return (
    <div className={styles["list-container"]}>
      {arr?.map((item) => {
        return (
          <div key={item} className={styles["list-item"]}>
            <span></span>
            <span></span>
          </div>
        );
      })}
    </div>
  );
};
