import { Outlet } from "react-router-dom";

import HomeLayout from "./layout";
import { useProblems } from "../../hooks/useProblems";

const Home = () => {
  const { problems, isLoading } = useProblems();

  return (
    <HomeLayout>
      {isLoading && <div>Is loading</div>}
      {problems && (
        <div>
          {problems.map((item, index) => {
            return (
              <div key={index}>
                {item.title}
                {item.point}
              </div>
            );
          })}
        </div>
      )}
      <Outlet />
    </HomeLayout>
  );
};

export default Home;
