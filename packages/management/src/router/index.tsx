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
import App from "../App";
import JudgerPage from "../pages/JudgerPage";
import JudgeableProblems from "../components/JudgableProblems";
import SubmissionList from "../components/SubmissionList";
import { AdminPage } from "../pages/AdminPage";
import CheckView from "../components/CheckView";
import { LoginPage } from "../pages/Login";

const Router = () => {
    const routes = createBrowserRouter([
        {
            path: "/login",
            element: <LoginPage />,
        },
        {
            path: "/",
            element: <App />,
            children: [
                {
                    index: true,
                    element: <Navigate to="/admin" />,
                },
                {
                    path: "admin",
                    element: <LayoutPage />,
                    children: [
                        {
                            index: true,
                            element: <Navigate to="contest" />,
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
                            element: <Navigate to="contest" />,
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
                                        {
                                            path: "problem/:problemId/check/:submissionId",
                                            element: <CheckView />,
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
