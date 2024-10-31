import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import QuestionManagement from "../components/QuestionManagement";
import StudentManagement from "../components/StudentManagement";
import NotFound from "../components/NotFound";
import ContestListPage from "../pages/ContestListPage";
import LayoutPage from "../pages/LayoutPage";
import { AdminPage } from "../pages/AdminPage";
import App from "../App";
import JudgerPage from "../pages/JudgerPage";
import JudgeableProblems from "../components/JudgableProblems";
import SubmissionList from "../components/SubmissionList";
import { LoginPage } from "../pages/Login";
const Router = () => {
  const routes = createBrowserRouter([
    {
      path: "/login",
      element: <LoginPage />
    },
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true, //测试用
          element: <Navigate to="/admin" />,
        },
        {
          path: "admin",
          element: <LayoutPage />,
          children: [
            {
              index: true, // 设置默认子路由
              element: <Navigate to="/admin/contest" />, // 访问 / 时重定向
            },
            {
              path: "contest",
              children: [
                {
                  index: true,
                  element: <ContestListPage />,
                },
                {
                  path: ":contestId", // 动态路由
                  element: <AdminPage />,
                  children: [
                    {
                      index: true,
                      element: <QuestionManagement />,
                    },
                    {
                      path: "question",
                      element: <QuestionManagement />,
                    },
                    {
                      path: "student",
                      element: <StudentManagement />,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          path: "judger",
          element: <LayoutPage />,
          children: [
            {
              index: true,
              element: <Navigate to="/judger/contest" />,
            },
            {
              path: "contest",
              children: [
                {
                  index: true,
                  element: <ContestListPage />,
                },
                {
                  path: ":contestId",
                  element: <JudgerPage />,
                  children: [
                    {
                      index: true,
                      element: <JudgeableProblems />,
                    },
                    {
                      path: "problem/:problemId",
                      element: <SubmissionList />,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
};

export default Router;
