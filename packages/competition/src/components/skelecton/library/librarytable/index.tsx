import { createColumnHelper } from "@tanstack/react-table";
import styles from "./index.module.scss";
import { Ellipsis } from "lucide-react";
import { OjTable } from "../../../table";

const columnHelper = createColumnHelper();
const arr = Array.from({ length: 10 }, (_, i) => i + 1);
const LibrarySkelecton = () => {
  const columns = [
    columnHelper.accessor("index", {
      header: () => <span>#ID</span>,
      cell: () => <span className={styles["span-font"]}></span>,
    }),
    columnHelper.accessor("title", {
      id: "title",
      cell: () => <i className={styles["span-description"]}></i>,
      header: () => <span>TITLE</span>,
    }),
    columnHelper.accessor("point", {
      id: "point",
      cell: () => <i className={styles["span-font"]}></i>,
      header: () => <span>SCORE</span>,
    }),
    columnHelper.accessor("id", {
      id: "id",
      cell: () => (
        <div className={styles.box}>
          <i className={styles["header-button"]}></i>
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
      //@ts-ignore
      columns={columns}
      dataSource={arr}
      caption={"Loading..."}
      className={styles["questions-table"]}
    />
  );
};

export default LibrarySkelecton;
