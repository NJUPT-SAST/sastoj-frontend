import { Card } from "@ui-aurora/react";
import styles from "./page.module.scss";
import ProblemsTable from "../../components/library/problemsTable";
import { useSwrGetProblems } from "../../swrHooks/problems";

const Library = () => {
  const contestId = Number(localStorage.getItem("contestId"));
  const { data } = useSwrGetProblems(contestId);
  // console.log("library information", data);

  return (
    <div className={styles["library-container"]}>
      <div className={styles["library-content"]}>
        <Card
          header={null}
          footer={null}
          mainContent={<ProblemsTable problems={data?.problems ?? []} />}
          className={styles["questions-table-container"]}
          shadow="regular"
        ></Card>
      </div>
    </div>
  );
};

export default Library;
