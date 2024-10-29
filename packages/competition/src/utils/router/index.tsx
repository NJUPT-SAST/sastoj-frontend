import { createBrowserRouter, Navigate } from "react-router-dom";
import loader from "./loader";
import Error from "../../pages/error/page";

const routes = [
  {
    path: "/login",
    lazy: async () => {
      const Login = (await import("../../pages/login/page")).default;
      return { Component: Login, loader: undefined };
    },
  },
  {
    path: "/",
    lazy: async () => {
      const Home = (await import("../../pages/home/page")).default;
      return { Component: Home, loader: loader };
    },
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Navigate to="/about" />,
      },
      {
        path: "about",
        lazy: async () => {
          const About = (await import("../../pages/about/page")).default;
          return { Component: About, loader: undefined };
        },
      },
      {
        path: "library",
        lazy: async () => {
          const Library = (await import("../../pages/library/page")).default;
          return { Component: Library, loader: undefined };
        },
      },
      {
        path: "rank",
        lazy: async () => {
          const Rank = (await import("../../pages/rank/page")).default;
          return { Component: Rank, loader: undefined };
        },
      },
    ],
  },
  {
    path: "/select",
    lazy: async () => {
      const Select = (await import("../../pages/select/page")).default;
      return { Component: Select, loader: loader };
    },
  },
  {
    path: "/problems",
    lazy: async () => {
      const Problems = (await import("../../pages/problems/page")).default;
      return { Component: Problems, loader: loader };
    },
    children: [
      {
        path: ":problemId",
        lazy: async () => {
          const ProblemContent = (
            await import("../../pages/problems/problemContent/page")
          ).default;
          return { Component: ProblemContent, loader: undefined };
        },
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
