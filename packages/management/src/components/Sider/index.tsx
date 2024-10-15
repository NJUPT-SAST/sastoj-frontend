import { IconChevronLeft, IconIdCard, IconSetting } from "@douyinfe/semi-icons";
import { Nav } from "@douyinfe/semi-ui";
import { useNavigate } from "react-router-dom";

export default function OJSider() {
  const navigate = useNavigate();
  return (
    <>
      <Nav
        style={{ height: "100%" }}
        className="sidebar"
        onSelect={({ itemKey }) => {
          console.log(itemKey);

          if (itemKey === "back") {
            navigate("/admin/competition");
          } else {
            navigate(itemKey.toString());
          }
        }}
        items={[
          {
            itemKey: "back",
            text: "返回上页",
            icon: <IconChevronLeft size="large" />,
          },
          {
            itemKey: "question",
            text: "题目管理",
            icon: <IconSetting size="large" />,
          },
          {
            itemKey: "student",
            text: "学生管理",
            icon: <IconIdCard size="large" />,
          },
        ]}
        footer={{
          collapseButton: true,
        }}
      />
    </>
  );
}
