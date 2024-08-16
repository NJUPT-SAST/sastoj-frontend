import React, { ReactNode } from "react";
import { Navbar } from "@ui-aurora/react";
import Logo from "../../components/logo";
import styles from "./page.module.scss";
import { HeaderContent } from "../../components/problems/headerContent";
import { RouteBack } from "../../components/route/RouteBack";

interface ProblemsLayoutProps {
  children: ReactNode;
}

const ProblemLayout: React.FC<ProblemsLayoutProps> = ({ children }) => {
  return (
    <div className={styles["page-container"]}>
      <Navbar
        header={
          <>
            <RouteBack route={'/Library'} />
            <Logo height={36} />
          </>
        }
        className={styles.navbar}
        mainContent={<HeaderContent />}
        footer={null}
      />
      {children}
    </div>
  );
};

export default ProblemLayout;
