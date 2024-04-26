import React, { ReactNode } from "react";
import { Navbar } from "@ui-aurora/react";

import Logo from "../../components/logo";
import styles from "./page.module.scss";
import { HeaderContent } from "../../components/problems/headerContent";

interface ProblemsLayoutProps {
  children: ReactNode;
}

const ProblemLayout: React.FC<ProblemsLayoutProps> = ({ children }) => {
  return (
    <div className={styles["page-container"]}>
      <Navbar
        header={<Logo height={36} />}
        className={styles.navbar}
        mainContent={<HeaderContent />}
        footer={<>李＋⭐</>}
      />
      {children}
    </div>
  );
};

export default ProblemLayout;
