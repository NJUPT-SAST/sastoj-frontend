import { Outlet } from "react-router-dom";

import HomeLayout from "./layout";

const Home = () => {
  return (
    <HomeLayout>
      <Outlet />
    </HomeLayout>
  );
};

export default Home;
