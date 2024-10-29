import { createBrowserRouter, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import loader from "./loader";
import Error from "../../pages/error/page";

// 懒加载页面组件
const Home = lazy(() => import("../../pages/home/page"));
const Library = lazy(() => import("../../pages/library/page"));
const Login = lazy(() => import("../../pages/login/page"));
const Rank = lazy(() => import("../../pages/rank/page"));
const Select = lazy(() => import("../../pages/select/page"));
const About = lazy(() => import("../../pages/about/page"));
const Problems = lazy(() => import("../../pages/problems/page"));
const ProblemContent = lazy(
  () => import("../../pages/problems/problemContent/page"),
);

const routes = [
  {
    path: "/login",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    ),
    errorElement: <Error />,
    loader: loader,
    children: [
      {
        index: true, // This sets the default child route
        element: <Navigate to="/about" />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/library",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Library />
          </Suspense>
        ),
      },
      {
        path: "/rank",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Rank />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/select",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Select />
      </Suspense>
    ),
    loader: loader,
  },
  {
    path: "/problems",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Problems />
      </Suspense>
    ),
    loader: loader,
    children: [
      {
        path: ":problemId",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ProblemContent />
          </Suspense>
        ),
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
