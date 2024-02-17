import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/page";
import Library from "../pages/library/page";
import Login from "../pages/login/page";
import Rank from "../pages/rank/page";
import Select from "../pages/select/page";
import About from "../pages/about/page";
import Error from "../pages/error/page";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/library",
        element: <Library />,
      },
      {
        path: "/rank",
        element: <Rank />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/select",
    element: <Select />,
  },
];

const router = createBrowserRouter(routes);

export default router;
