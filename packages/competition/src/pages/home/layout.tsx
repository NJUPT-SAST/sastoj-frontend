import React, { ReactNode, useEffect, useState } from "react";
import { Navbar, NavbarItemProps } from "@ui-aurora/react";
import { Home as HomeIcon, LayoutList, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";

import Logo from "../../components/logo";
import styles from "./page.module.scss";

interface HomeLayoutProps {
  children: ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  const [selectedRoute, setSelectedRoute] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    navigate(selectedRoute);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRoute]);

  const headerItems: NavbarItemProps[] = [
    {
      icon: <HomeIcon size={20} />,
      itemKey: "",
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
    <>
      <Navbar
        header={<Logo height={36} />}
        items={headerItems}
        selectedKey={selectedRoute}
        onchange={(value: string) => setSelectedRoute(value)}
        className={styles.navbar}
      />
      {children}
    </>
  );
};

export default HomeLayout;
