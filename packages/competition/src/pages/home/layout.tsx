import React, { ReactNode } from "react";
import { Navbar, NavbarItemProps } from "@ui-aurora/react";
import { Home as HomeIcon, LayoutList } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

import Logo from "../../components/logo";
import Footer from "../../components/footer";
import styles from "./page.module.scss";
import Avatar from "../../components/avatar";
import { RouteLayout } from "../../components/route/RouteLayout";

interface HomeLayoutProps {
  children: ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const headerItems: NavbarItemProps[] = [
    {
      navbarItemIcon: <HomeIcon size={20} />,
      navbarItemKey: "About",
      navbarItemContent: "首页",
    },
    {
      navbarItemIcon: <LayoutList size={20} />,
      navbarItemKey: "Library",
      navbarItemContent: "题库",
    },
    // {
    //   navbarItemIcon: <Award size={20} />,
    //   navbarItemKey: "Rank",
    //   navbarItemContent: "排名",
    // },
  ];
  return (
    <div className={styles["page-container"]}>
      <Navbar
        header={<Logo height={36} onClick={() => navigate("/About")} />}
        footer={
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <RouteLayout>
              <Avatar style={{ marginRight: 0 }} height={28} />
            </RouteLayout>
          </div>
        }
        contentItems={headerItems}
        selectedKey={location.pathname.replace("/", "")}
        onChange={navigate}
        className={styles.navbar}
      />
      <div className={styles.slot}>{children}</div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
