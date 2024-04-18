import React, { ReactNode, useState } from "react";
import { Navbar } from "@ui-aurora/react";

import Logo from "../../components/logo";
import styles from "./page.module.scss";

interface ProblemsLayoutProps {
  children: ReactNode;
}

const ProblemLayout: React.FC<ProblemsLayoutProps> = ({ children }) => {
  const [selectedRoute, setSelectedRoute] = useState<string>("About");

  return (
    <div className={styles["page-container"]}>
      <Navbar
        header={<Logo height={36} />}
        selectedKey={selectedRoute}
        onchange={(value: string) => setSelectedRoute(value)}
        className={styles.navbar}
      />
      {children}
    </div>
  );
};

export default ProblemLayout;
