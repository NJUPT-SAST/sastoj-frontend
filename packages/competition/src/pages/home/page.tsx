import { Outlet } from "react-router-dom";
import html from "../../utils/markdown";
import { Navbar, NavbarItemProps } from "@ui-aurora/react";
import Logo from "../../components/logo";
import { Home as HomeIcon, LayoutList, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const [selectedRoute, setSelectedRoute] = useState<string>("");
  const navigate = useNavigate();

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

  useEffect(() => {
    navigate(selectedRoute);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRoute]);

  return (
    <>
      <Navbar
        header={<Logo height={36} />}
        items={headerItems}
        selectedKey={selectedRoute}
        onchange={(value: string) => setSelectedRoute(value)}
      />
      <div dangerouslySetInnerHTML={{ __html: html }} />
      This is Home
      <Outlet></Outlet>
    </>
  );
};

export default Home;
