import {Navigate} from "react-router-dom";

export const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
    const token = localStorage.getItem("token"); // 检查本地存储中的 token

    if (!token) {
        return <Navigate to="/login" replace />; // 未登录则重定向到登录页
    }

    return element; // 已登录则渲染对应的受保护页面
};
