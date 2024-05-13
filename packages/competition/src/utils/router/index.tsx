import { createBrowserRouter } from "react-router-dom";

import Home from "../../pages/home/page";
import Library from "../../pages/library/page";
import Login from "../../pages/login/page";
import Rank from "../../pages/rank/page";
import Select from "../../pages/select/page";
import About from "../../pages/about/page";
import Error from "../../pages/error/page";
import Problems from "../../pages/problems/page";
import ProblemContent from "../../pages/problems/problemContent/page";
import loader from "./loader";

const routes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    // redirect: "/about",
    element: <Home />,
    errorElement: <Error />,
    loader: loader,
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
    path: "/select",
    element: <Select />,
    loader: loader,
  },
  {
    path: "/problems",
    element: <Problems />,
    loader: loader,
    children: [
      {
        path: ":problemId",
        element: <ProblemContent />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
