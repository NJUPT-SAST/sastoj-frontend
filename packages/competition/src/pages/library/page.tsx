import { Card } from "@ui-aurora/react";
import styles from "./page.module.scss";
import ProblemsTable from "../../components/library/problemsTable";
import { useSwrGetProblems } from "../../swrHooks/problems";
import LibrarySkelecton from "../../components/skelecton/library/librarytable";

const Library = () => {
  const contestId = Number(localStorage.getItem("contestId"));
  const { data } = useSwrGetProblems(contestId);

  return (
    <div className={styles["library-container"]}>
      <div className={styles["library-content"]}>
        <Card
          header={null}
          footer={null}
          content={
            data?.problems ? (
              <ProblemsTable problems={data?.problems ?? []} />
            ) : (
              <LibrarySkelecton />
            )
          }
          className={styles["questions-table-container"]}
          shadow="regular"
        />
      </div>
    </div>
  );
};

export default Library;
