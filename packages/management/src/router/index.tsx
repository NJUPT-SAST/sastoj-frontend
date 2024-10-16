import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import QuestionManagement from "../components/QuestionManagement";
import StudentManagement from "../components/StudentManagement";
import NotFound from "../components/NotFound";
import ContestListPage from "../pages/ContestListPage";
import AdminPage from "../pages/AdminPage";
const Router = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "admin",
          element: <AdminPage />,
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
