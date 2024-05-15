import { Card } from "@ui-aurora/react";
import styles from "./page.module.scss";
import ProblemsTable from "../../components/library/problemsTable";
import { useSwrGetProblems } from "../../swrHooks/problems";
import Error from "../error/page";

const Library = () => {
  const contestId = Number(localStorage.getItem("contestId"));
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data, isLoading, error } = useSwrGetProblems(contestId)
  console.log(data);

  if (error) return <Error />
  if (isLoading) return <div>loading...</div>
  return (
    <div className={styles["library-container"]}>
      <div className={styles["library-content"]}>
        <Card
          header={null}
          footer={null}
          mainContent={<ProblemsTable {...data} />}
          className={styles["questions-table-container"]}
          shadow="regular"
        ></Card>
      </div>
    </div>
  );
};

export default Library;
