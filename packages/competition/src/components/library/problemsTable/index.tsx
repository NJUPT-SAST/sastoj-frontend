import { Badge, Button } from "@ui-aurora/react";
import { useNavigate } from "react-router-dom";
import { OjTable } from "../../table";
import { createColumnHelper } from "@tanstack/react-table";
import styles from "./index.module.scss";
import { Ellipsis } from "lucide-react";

interface Question {
  id: number;
  title: string;
  description: string;
  state: string;
  operation: string;
}

const columnHelper = createColumnHelper<Question>();

const data = [
  {
    id: 1,
    title: "Example1",
    description: "签到算法题哦！！！",
    state: "SUCCESS",
    operation: "13",
  },
  {
    id: 2,
    title: "Example2",
    description: "Description2",
    state: "ERROR",
    operation: "12",
  },
  {
    id: 3,
    title: "Example3",
    description: "Description3",
    state: "WARNING",
    operation: "11",
  },
  {
    id: 4,
    title: "Example4",
    description: "Description4",
    state: "WARNING",
    operation: "10",
  },
  {
    id: 5,
    title: "Example3",
    description: "Description3",
    state: "WARNING",
    operation: "9",
  },
  {
    id: 6,
    title: "Example3",
    description: "Description3",
    state: "WARNING",
    operation: "8",
  },
  {
    id: 7,
    title: "Example3",
    description: "Description3",
    state: "WARNING",
    operation: "7",
  },
  {
    id: 8,
    title: "Example3",
    description: "Description3",
    state: "WARNING",
    operation: "6",
  },
  {
    id: 9,
    title: "Example3",
    description: "Description3",
    state: "WARNING",
    operation: "5",
  },
  {
    id: 10,
    title: "Example3",
    description: "Description3",
    state: "WARNING",
    operation: "4",
  },
  {
    id: 11,
    title: "Example1",
    description: "Description1",
    state: "SUCCESS",
    operation: "3",
  },
  {
    id: 12,
    title: "Example1",
    description: "Description1",
    state: "SUCCESS",
    operation: "2",
  },
  {
    id: 13,
    title: "Example1",
    description: "Description1",
    state: "SUCCESS",
    operation: "1",
  },
  {
    id: 14,
    title: "Example2",
    description: "Description2",
    state: "ERROR",
    operation: "123",
  },
];

const ProblemsTable = () => {
  const navigate = useNavigate();
  const columns = [
    columnHelper.accessor("id", {
      header: () => <span>#ID</span>,
      cell: (info) => (
        <span className={styles["span-font"]}>{info.getValue()}</span>
      ),
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor((row) => row.title, {
      id: "title",
      cell: (info) => <i className={styles["span-font"]}>{info.getValue()}</i>,
      header: () => <span>TITLE</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("description", {
      header: () => <span>DESCRIPTION</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("state", {
      id: "state",
      cell: (info) => (
        <div style={{ textAlign: "center" }}>
          <Badge
            type={
              info.getValue().toLowerCase() as "success" | "error" | "warning"
            }
            content={info.getValue()}
            size="small"
          />
        </div>
      ),
      header: () => <span className={styles["header-div"]}>STATE</span>,
      footer: (info) => info.column.id,
    }),
    columnHelper.accessor("operation", {
      cell: (info) => (
        <div className={styles["header-div"]}>
          <Button
            onClick={() => {
              navigate(`/problems/${info.getValue()}`);
            }}
            color="border"
            size="small"
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
      dataSource={data}
      caption="Fresh Cup"
      className={styles["questions-table"]}
    />
  );
};

export default ProblemsTable;
