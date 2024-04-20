import { Outlet } from "react-router-dom";
import ProblemLayout from "./layout";

const Problems = () => {
  return (
    <ProblemLayout>
      <Outlet></Outlet>
    </ProblemLayout>
  );
};

export default Problems;
