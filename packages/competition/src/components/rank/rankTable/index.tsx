/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  PaginationState,
} from "@tanstack/react-table";
import { Table, Tbody, Td, Th, Thead, Tr } from "@ui-aurora/react";
import { Pagination } from "@ui-aurora/react"; // Assuming Pagination component exists in your UI library

// Define the types
export interface Response {
  users: User[];
  [property: string]: any;
}

export interface User {
  penalty?: number;
  problems: Problem[];
  rank: number;
  totalScore: number;
  username: string;
  [property: string]: any;
}

export interface Problem {
  point: number;
  problemId: string;
  scoreAchievedTime: string;
  state: number;
  triedTimes?: number;
  [property: string]: any;
}

// Helper to create columns
const columnHelper = createColumnHelper<User>();

const defaultData: Response = {
  users: [
    {
      rank: 1,
      username: "User1",
      totalScore: 100,
      penalty: 10,
      problems: [
        { problemId: "P1", point: 50, scoreAchievedTime: "10:00", state: 1 },
        { problemId: "P2", point: 50, scoreAchievedTime: "20:00", state: 1 },
        { problemId: "P3", point: 40, scoreAchievedTime: "25:00", state: 1 },
      ],
    },
    {
      rank: 2,
      username: "User2",
      totalScore: 80,
      penalty: 20,
      problems: [
        { problemId: "P1", point: 40, scoreAchievedTime: "15:00", state: 1 },
        { problemId: "P2", point: 40, scoreAchievedTime: "25:00", state: 1 },
        { problemId: "P3", point: 40, scoreAchievedTime: "25:00", state: 1 },
      ],
    },
    // Add more users here if needed for testing pagination
  ],
};

export function RankTable() {
  const [data, _setData] = React.useState(() => [...defaultData.users]);

  // Pagination state
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 1, // Set page size to 5 for example
  });

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
    data,
    columns,
    state: {
      pagination,
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
  });

  return (
    <div>
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
                {row.getVisibleCells().map((cell) => (
                  <Td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                ))}
              </Tr>
            ))}
        </Tbody>
      </Table>

      <div>
        <Pagination
          total={data.length}
          pageSize={pagination.pageSize}
          activePage={pagination.pageIndex + 1}
          onChange={(page) =>
            setPagination({ ...pagination, pageIndex: page - 1 })
          }
        />
      </div>
    </div>
  );
}
