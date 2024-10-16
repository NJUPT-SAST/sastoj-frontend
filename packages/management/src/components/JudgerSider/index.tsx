import { IconChevronLeft, IconFile, IconHistory } from "@douyinfe/semi-icons";
import { Nav } from "@douyinfe/semi-ui";
import { useNavigate } from "react-router-dom";

const JudgerSider = () => {
  const navigate = useNavigate();
  return (
    <>
      <Nav
        style={{ maxWidth: 220, height: "100%" }}
        className="sidebar"
        onSelect={({ itemKey }) => {
          if (itemKey === "back") {
            navigate("/judge/contest");
          } else if (typeof itemKey === "number") {
            navigate(`processing/${itemKey.toString()}`);
          } else navigate(itemKey.toString());
        }}
        items={[
          {
            itemKey: "back",
            text: "返回列表",
            icon: <IconChevronLeft size="large" />,
          },
          {
            itemKey: "processing",
            text: "批改",
            icon: <IconFile size="large" />,
          },
          {
            itemKey: "judged-list",
            text: "已批改答案",
            icon: <IconHistory size="large" />,
          },
        ]}
        footer={{
          collapseButton: true,
        }}
      />
    </>
  );
};
export default JudgerSider;
