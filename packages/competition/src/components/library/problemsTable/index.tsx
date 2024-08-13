import { Button } from "@ui-aurora/react";
import { useNavigate } from "react-router-dom";
import { OjTable } from "../../table";
import { createColumnHelper } from "@tanstack/react-table";
import styles from "./index.module.scss";
import { Ellipsis } from "lucide-react";

import { Problem } from "../../../types/problem";

interface GetProblemsProps {
  problems: Problem[];
}

const columnHelper = createColumnHelper<Problem>();

const ProblemsTable = (data: GetProblemsProps) => {
  const navigate = useNavigate();
  const columns = [
    columnHelper.accessor("id", {
      header: () => <span>#ID</span>,
      cell: (info) => (
        <span className={styles["span-font"]}>{info.getValue()}</span>
      ),
    }),
    columnHelper.accessor((row) => row.title, {
      id: "title",
      cell: (info) => <i className={styles["span-description"]}>{info.getValue()}</i>,
      header: () => <span>TITLE</span>,
    }),
    columnHelper.accessor((row) => row.point, {
      id: "point",
      cell: (info) => <i className={styles["span-font"]}>{info.getValue()}</i>,
      header: () => <span>POINT</span>,
    }),
    columnHelper.accessor((row) => row.index, {
      id: "index",
      cell: (info) => (
        <div className={styles["header-div"]}>
          <Button
            onClick={() => {
              navigate(`/problems/${info.getValue()}`);
            }}
            color="secondary"
            size="medium"
          >
            Enter
          </Button>
        </div>
      ),
      header: () => (
        <div className={styles["header-div"]}>
          <Ellipsis />
        </div>
      ),
    }),
  ];
  return (
    <OjTable
      columns={columns}
      dataSource={data.problems}
      caption="Fresh Cup"
      className={styles["questions-table"]}
    />
  );
};

export default ProblemsTable;
