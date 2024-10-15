import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import QuestionManagement from "../components/QuestionManagement";
import StudentManagement from "../components/StudentManagement";
import NotFound from "../components/NotFound";
import ContestList from "../pages/ContestList";
const Router = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "admin",
          element: <ContestList />,
          children: [
            {
              index: true, // 设置默认子路由
              element: <Navigate to="/contest" />, // 访问 / 时重定向
            },
            {
              path: "contest",
              element: <ContestList />,
            },
            {
              path: "student",
              element: <StudentManagement />,
            },
            {
              path: "question",
              element: <QuestionManagement />,
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
