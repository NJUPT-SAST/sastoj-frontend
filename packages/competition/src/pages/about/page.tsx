import { createColumnHelper } from "@tanstack/react-table";
import { OjTable } from "../../components/table";

interface Person {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
}

const defaultData = [
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
  {
    firstName: "john",
    lastName: "doe",
    age: 32,
    visits: 60,
    status: "Single",
    progress: 30,
  },
  {
    firstName: "mary",
    lastName: "smith",
    age: 28,
    visits: 80,
    status: "In Relationship",
    progress: 70,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
  {
    firstName: "john",
    lastName: "doe",
    age: 32,
    visits: 60,
    status: "Single",
    progress: 30,
  },
  {
    firstName: "mary",
    lastName: "smith",
    age: 28,
    visits: 80,
    status: "In Relationship",
    progress: 70,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
  {
    firstName: "john",
    lastName: "doe",
    age: 32,
    visits: 60,
    status: "Single",
    progress: 30,
  },
  {
    firstName: "mary",
    lastName: "smith",
    age: 28,
    visits: 80,
    status: "In Relationship",
    progress: 70,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
  {
    firstName: "john",
    lastName: "doe",
    age: 32,
    visits: 60,
    status: "Single",
    progress: 30,
  },
  {
    firstName: "mary",
    lastName: "smith",
    age: 28,
    visits: 80,
    status: "In Relationship",
    progress: 70,
  },
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
  {
    firstName: "john",
    lastName: "doe",
    age: 32,
    visits: 60,
    status: "Single",
    progress: 30,
  },
  {
    firstName: "mary",
    lastName: "smith",
    age: 28,
    visits: 80,
    status: "In Relationship",
    progress: 70,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
  {
    firstName: "john",
    lastName: "doe",
    age: 32,
    visits: 60,
    status: "Single",
    progress: 30,
  },
  {
    firstName: "mary",
    lastName: "smith",
    age: 28,
    visits: 80,
    status: "In Relationship",
    progress: 70,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
  {
    firstName: "john",
    lastName: "doe",
    age: 32,
    visits: 60,
    status: "Single",
    progress: 30,
  },
  {
    firstName: "mary",
    lastName: "smith",
    age: 28,
    visits: 80,
    status: "In Relationship",
    progress: 70,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
  {
    firstName: "john",
    lastName: "doe",
    age: 32,
    visits: 60,
    status: "Single",
    progress: 30,
  },
  {
    firstName: "mary",
    lastName: "smith",
    age: 28,
    visits: 80,
    status: "In Relationship",
    progress: 70,
  },
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
  {
    firstName: "john",
    lastName: "doe",
    age: 32,
    visits: 60,
    status: "Single",
    progress: 30,
  },
  {
    firstName: "mary",
    lastName: "smith",
    age: 28,
    visits: 80,
    status: "In Relationship",
    progress: 70,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
  {
    firstName: "john",
    lastName: "doe",
    age: 32,
    visits: 60,
    status: "Single",
    progress: 30,
  },
  {
    firstName: "mary",
    lastName: "smith",
    age: 28,
    visits: 80,
    status: "In Relationship",
    progress: 70,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
  {
    firstName: "john",
    lastName: "doe",
    age: 32,
    visits: 60,
    status: "Single",
    progress: 30,
  },
  {
    firstName: "mary",
    lastName: "smith",
    age: 28,
    visits: 80,
    status: "In Relationship",
    progress: 70,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
  {
    firstName: "john",
    lastName: "doe",
    age: 32,
    visits: 60,
    status: "Single",
    progress: 30,
  },
  {
    firstName: "mary",
    lastName: "smith",
    age: 28,
    visits: 80,
    status: "In Relationship",
    progress: 70,
  },
  {
    firstName: "tanner",
    lastName: "linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
  },
  {
    firstName: "tandy",
    lastName: "miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
  {
    firstName: "john",
    lastName: "doe",
    age: 32,
    visits: 60,
    status: "Single",
    progress: 30,
  },
  {
    firstName: "mary",
    lastName: "smith",
    age: 28,
    visits: 80,
    status: "In Relationship",
    progress: 70,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
  {
    firstName: "john",
    lastName: "doe",
    age: 32,
    visits: 60,
    status: "Single",
    progress: 30,
  },
  {
    firstName: "mary",
    lastName: "smith",
    age: 28,
    visits: 80,
    status: "In Relationship",
    progress: 70,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
  {
    firstName: "john",
    lastName: "doe",
    age: 32,
    visits: 60,
    status: "Single",
    progress: 30,
  },
  {
    firstName: "mary",
    lastName: "smith",
    age: 28,
    visits: 80,
    status: "In Relationship",
    progress: 70,
  },
  {
    firstName: "joe",
    lastName: "dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
  },
  {
    firstName: "john",
    lastName: "doe",
    age: 32,
    visits: 60,
    status: "Single",
    progress: 30,
  },
  {
    firstName: "mary",
    lastName: "smith",
    age: 28,
    visits: 80,
    status: "In Relationship",
    progress: 70,
  },
];

const columnHelper = createColumnHelper<Person>();

const columns = [
  columnHelper.accessor("firstName", {
    cell: (info) => info.getValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor((row) => row.lastName, {
    id: "lastName",
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Last Name1</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("age", {
    header: () => "Age",
    cell: (info) => info.renderValue(),
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("visits", {
    header: () => <span>Visits</span>,
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("status", {
    header: "Status",
    footer: (info) => info.column.id,
  }),
  columnHelper.accessor("progress", {
    header: "Profile Progress",
    footer: (info) => info.column.id,
  }),
];

const About = () => {
  return (
    <OjTable
      dataSource={defaultData}
      columns={columns}
      filterKeyWord="firstName"
      caption="比赛题目列表"
    />
  );
};

export default About;
