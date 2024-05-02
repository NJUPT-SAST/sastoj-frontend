import { Card } from "@ui-aurora/react";
import styles from "./page.module.scss";
import ProblemsTable from "../../components/library/problemsTable";

const Library = () => {
  return (
    <div className={styles["library-page"]}>
      <Card
        header={null}
        footer={null}
        mainContent={<ProblemsTable />}
        className={styles["questions-table-container"]}
        shadow="regular"
      ></Card>
    </div>
  );
};

export default Library;
