import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

export const RouteLayout = ({children}:{children:React.ReactNode}) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    navigate("/login", { replace: true });
  };
  return (
    <div
    className={styles.icon}
    onClick={() => handleLogout()}
    >
      {children}
    </div>
  );
};
