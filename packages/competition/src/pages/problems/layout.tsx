import React, { ReactNode } from "react";
import { Navbar } from "@ui-aurora/react";
import Logo from "../../components/logo";
import styles from "./page.module.scss";
import { HeaderContent } from "../../components/problems/headerContent";
import { useNavigate } from "react-router-dom";
// import { RouteBack } from "../../components/route/RouteBack";

interface ProblemsLayoutProps {
  children: ReactNode;
}

const ProblemLayout: React.FC<ProblemsLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className={styles["page-container"]}>
      <Navbar
        header={
          <>
            <Logo height={36} onClick={() => navigate("/About")} />
          </>
        }
        className={styles.navbar}
        content={<HeaderContent />}
      />
      {children}
    </div>
  );
};

export default ProblemLayout;
