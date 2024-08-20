import { Button } from "@ui-aurora/react";
import { useNavigate } from "react-router-dom";
import { OjTable } from "../../table";
import { createColumnHelper } from "@tanstack/react-table";
import styles from "./index.module.scss";
import { Ellipsis } from "lucide-react";
import { sortByKey } from "../../../utils/aboutHandleData";

import { Problem } from "../../../types/problem";
import { useMsg } from "../../../stores/useMsg";

interface GetProblemsProps {
  problems: Problem[];
}

const columnHelper = createColumnHelper<Problem>();

const ProblemsTable = (data: GetProblemsProps) => {
  const navigate = useNavigate();
  const title = useMsg((state) => state.title)
  const columns = [
    columnHelper.accessor("index", {
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
      dataSource={sortByKey(data.problems, 'index')}
      caption={title || "Fresh Cup"}
      className={styles["questions-table"]}
    />
  );
};

export default ProblemsTable;
