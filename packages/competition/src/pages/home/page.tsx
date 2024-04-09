import { Outlet } from "react-router-dom";
import { Navbar, NavbarItemProps } from "@ui-aurora/react";
import Logo from "../../components/logo";
import { Home as HomeIcon, LayoutList, Award } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { convertMarkdownToHtml } from "../../utils/markdown";

const Home = () => {
  const [selectedRoute, setSelectedRoute] = useState<string>("");
  const [markdownToHtml, setMarkdownToHtml] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    convertMarkdownToHtml(
      '# Markdown Sample\n\nThis is a **Markdown** sample with various elements.\n\n## Lists\n\n1. First item\n2. Second item\n3. Third item like this source code\n\n## Code Block\n\n```javascript\nfunction greet(name) {\n  console.log("Hello, "!");\n}\n```\n\n## Links\n\n[OpenAI](https://openai.com)\n\n## Table\n\n| Name  | Age | Gender |\n|-------|-----|--------|\n| John  | 25  | Male   |\n| Emily | 30  | Female |\n| Mark  | 28  | Male   |\n\n## Blockquote\n\n> Markdown is a lightweight markup language used for formatting text. It is widely used for creating documentation, README files, and web content.\n\nThat\'s it for the Markdown sample. Enjoy!'
    )
      .then((html: string) => {
        setMarkdownToHtml(html);
      })
      .catch((error) => {
        console.log("Convert markdown to html error:", error);
      });
  }, []);

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
      <div
        dangerouslySetInnerHTML={{ __html: markdownToHtml }}
        style={{ width: "50%", margin: "10px" }}
      />
      This is Home
      <Outlet></Outlet>
    </>
  );
};

export default Home;
