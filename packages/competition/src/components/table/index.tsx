import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  ColumnDef,
  getFilteredRowModel,
  ColumnFiltersState,
  PaginationState,
  getPaginationRowModel,
} from "@tanstack/react-table";
import {
  Input,
  Pagination,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@ui-aurora/react";
import { useEffect, useMemo, useState } from "react";
import styles from "./index.module.scss";

interface OjTableProps<TData> {
  dataSource: TData[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: ColumnDef<TData, any>[];
  filterKeyWord?: string;
  caption?: string;
  pageSize?: number;
}

export const OjTable = <TData,>({
  dataSource,
  columns,
  filterKeyWord,
  caption,
  pageSize = 10,
}: OjTableProps<TData>) => {
  const data = useMemo(() => dataSource, [dataSource]);
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: pageSize,
  });

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
      pagination,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onPaginationChange: setPagination,
  });

  useEffect(() => {
    console.log(pagination);
  }, [pagination]);

  return (
    <div className={styles.table}>
      <div className={styles.caption}>
        <h2 className={styles["caption-span"]}>{caption}</h2>
        {/* 这是检索信息的输入框 */}
        <Input
          label={filterKeyWord}
          isBorder={false}
          value={
            table
              .getHeaderGroups()[0]
              .headers.find((header) => header.id === filterKeyWord)
              ?.column.getFilterValue() as string
          }
          onchange={(value) =>
            table
              .getHeaderGroups()[0]
              .headers.find((header) => header.id === filterKeyWord)
              ?.column.setFilterValue(value)
          }
        ></Input>
      </div>
      <Table>
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map((row) => (
            <Tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
      <div className={styles.pagination}>
        <Pagination
          total={table.getPageCount() * pageSize}
          pageSize={pagination.pageSize}
          activePage={pagination.pageIndex}
          onChange={(page) => table.setPageIndex(page - 1)}
        />
      </div>
    </div>
  );
};
