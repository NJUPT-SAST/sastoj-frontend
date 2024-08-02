import React, { ReactNode } from "react";
import { Navbar } from "@ui-aurora/react";
import { ChevronLeft } from "lucide-react";
import Logo from "../../components/logo";
import styles from "./page.module.scss";
import { HeaderContent } from "../../components/problems/headerContent";
import { useNavigate } from "react-router-dom";

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
            <ChevronLeft size={24} onClick={()=>{navigate('/Library')}}/>
            <Logo height={36} />
          </>
        }
        className={styles.navbar}
        mainContent={<HeaderContent />}
        footer={<>李＋⭐</>}
      />
      {children}
    </div>
  );
};

export default ProblemLayout;
