import * as React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  PaginationState,
} from "@tanstack/react-table";
import { Table, Tbody, Td, Th, Thead, Tr } from "@ui-aurora/react";
import { Pagination } from "@ui-aurora/react"; // Assuming Pagination component exists in your UI library
import { User } from "../../../types/rank";
import { useSWRGetRank } from "../../../swrHooks/rank";

// Define the types

// Helper to create columns
const columnHelper = createColumnHelper<User>();

// Define status to color mapping for inline styles
const STATUS_COLORS = {
  "1": { backgroundColor: "#f3f4f6" }, // ProblemUnaccepted - light gray
  "2": { backgroundColor: "#fef3c7" }, // ProblemAccepted - light yellow
  "3": { backgroundColor: "#d1fae5" }, // ProblemFirstAccepted - light green
};

export function RankTable() {
  // Pagination state
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 10,
  });

  const { data: rankData } = useSWRGetRank(
    localStorage.getItem("contestId") as unknown as string,
    pagination.pageIndex,
    pagination.pageSize,
  );

  const data = React.useMemo(
    () => (rankData ? [...rankData.users] : []),
    [rankData],
  );

  // Dynamically create columns based on the problems in the first user
  const problemColumns =
    data[0]?.problems.map((_, index) =>
      columnHelper.accessor((row: User) => row.problems[index]?.point, {
        header: `Problem ${index + 1} Points`,
        cell: (info) => info.getValue() || "No points",
      }),
    ) || [];

  // Define the static columns (Rank, Username, Total Score, Penalty)
  const staticColumns = [
    columnHelper.accessor("rank", {
      header: "Rank",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("username", {
      header: "Username",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("totalScore", {
      header: "Total Score",
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor("penalty", {
      header: "Penalty",
      cell: (info) => info.getValue() ?? 0,
    }),
  ];

  // Combine static and dynamic columns
  const columns = [...staticColumns, ...problemColumns];

  // Initialize the table with pagination
  const table = useReactTable({
    data: data,
    columns,
    state: {
      pagination,
    },
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ flexGrow: 1 }}>
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
            {table
              .getRowModel()
              .rows.slice(
                pagination.pageIndex * pagination.pageSize,
                (pagination.pageIndex + 1) * pagination.pageSize,
              )
              .map((row) => (
                <Tr key={row.id}>
                  {row.getVisibleCells().map((cell) => {
                    const problemIndex = cell.column.id.match(/\d+/)?.[0];
                    const isProblemColumn = problemIndex !== undefined;
                    const problemStatus = isProblemColumn
                      ? row.original.problems[parseInt(problemIndex) - 1]?.state
                      : 0;

                    return (
                      <Td
                        key={cell.id}
                        // @ts-expect-error TODO:
                        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                        style={STATUS_COLORS[`${problemStatus}`]}
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </Td>
                    );
                  })}
                </Tr>
              ))}
          </Tbody>
        </Table>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "1rem",
        }}
      >
        <div style={{ width: "fit-content", padding: "1rem" }}>
          <Pagination
            total={data.length}
            pageSize={pagination.pageSize}
            defaultActivePage={1}
            onChange={(page) => {
              setPagination({ ...pagination, pageIndex: page - 1 });
            }}
          />
        </div>
      </div>
    </div>
  );
}
