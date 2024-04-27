import ProblemsTable from "../../components/Library/problemTable";
import styles from "./page.module.scss";

const Library = () => {
  return (
    <div className={styles["library-page"]}>
      <ProblemsTable />
    </div>
  );
};

export default Library;
