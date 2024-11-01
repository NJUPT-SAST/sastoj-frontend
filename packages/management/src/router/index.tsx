import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import UserGroupManagement from "../components/admin/UserGroupManagement/index.tsx";
import NotFound from "../components/NotFound";
import ContestListPage from "../pages/ContestListPage";
import LayoutPage from "../pages/LayoutPage";
import App from "../App";
import JudgerPage from "../pages/JudgerPage";
import JudgeableProblems from "../components/judger/JudgableProblems/index.tsx";
import SubmissionList from "../components/judger/SubmissionList/index.tsx";
import {AdminPage} from "../pages/AdminPage";
import CheckView from "../components/judger/CheckView/index.tsx";
import {LoginPage} from "../pages/Login";
import {ProtectedRoute} from "./ProtectedRoute.tsx";
import QuestionManagement from "../components/admin/QuestionManagement/index.tsx";

const Router = () => {
    const routes = createBrowserRouter([
        {
            path: "/login",
            element: <LoginPage/>,
        },
        {
            path: "/",
            element: <App/>,
            children: [
                {
                    index: true,
                    element: <Navigate to="/admin"/>,
                },
                {
                    path: "admin",
                    element: <ProtectedRoute element={<LayoutPage/>}/>,
                    children: [
                        {
                            index: true,
                            element: <Navigate to="contest"/>,
                        },
                        {
                            path: "contest",
                            children: [
                                {
                                    index: true,
                                    element: <ContestListPage/>,
                                },
                                {
                                    path: ":contestId",
                                    element: <AdminPage/>,
                                    children: [
                                        {
                                            index: true,
                                            element: <QuestionManagement/>,
                                        },
                                        {
                                            path: "question",
                                            element: <QuestionManagement/>,
                                        },
                                        {
                                            path: "student",
                                            element: <UserGroupManagement/>,
                                        },
                                        {
                                            path: "edit",
                                            element: <div>Edit</div>,
                                        }
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    path: "judger",
                    element: <ProtectedRoute element={<LayoutPage/>}/>,
                    children: [
                        {
                            index: true,
                            element: <Navigate to="contest"/>,
                        },
                        {
                            path: "contest",
                            children: [
                                {
                                    index: true,
                                    element: <ContestListPage/>,
                                },
                                {
                                    path: ":contestId",
                                    element: <JudgerPage/>,
                                    children: [
                                        {
                                            index: true,
                                            element: <JudgeableProblems/>,
                                        },
                                        {
                                            path: "problem/:problemId",
                                            element: <SubmissionList/>,
                                        },
                                        {
                                            path: "problem/:problemId/check/:submissionId",
                                            element: <CheckView/>,
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    path: "*",
                    element: <NotFound/>,
                },
            ],
        },
    ]);
    return <RouterProvider router={routes}/>;
};

export default Router;
