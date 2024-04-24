import React, { ReactNode, useEffect, useState } from "react";
import { Navbar, NavbarItemProps } from "@ui-aurora/react";
import { Home as HomeIcon, LayoutList, Award } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

import Logo from "../../components/logo";
import Footer from "../../components/footer";
import styles from "./page.module.scss";

interface HomeLayoutProps {
  children: ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  const location = useLocation();
  const [selectedRoute, setSelectedRoute] = useState<string>(location.pathname.replace("/", "") || "About");
  const navigate = useNavigate();

  useEffect(() => {
    navigate(selectedRoute);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRoute]);

  const headerItems: NavbarItemProps[] = [
    {
      icon: <HomeIcon size={20} />,
      itemKey: "About",
      text: "首页",
    },
    {
      icon: <LayoutList size={20} />,
      itemKey: "Library",
      text: "题库",
    },
    {
      icon: <Award size={20} />,
      itemKey: "Rank",
      text: "排名",
    },
  ];
  return (
    <div className={styles["page-container"]}>
      <Navbar
        header={<Logo height={36} />}
        items={headerItems}
        selectedKey={location.pathname.replace("/", "")}
        onchange={(value: string) => setSelectedRoute(value)}
        className={styles.navbar}
      />
      <div className={styles.slot}>{children}</div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
