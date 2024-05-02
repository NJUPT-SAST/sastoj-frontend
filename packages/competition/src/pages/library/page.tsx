import { Card } from "@ui-aurora/react";
import styles from "./page.module.scss";
import ProblemsTable from "../../components/library/problemsTable";

const Library = () => {
  return (
    <div className={styles["library-container"]}>
      <div className={styles["library-content"]}>
        <Card
          header={null}
          footer={null}
          mainContent={<ProblemsTable />}
          className={styles["questions-table-container"]}
          shadow="regular"
        ></Card>
      </div>
    </div>
  );
};

export default Library;
