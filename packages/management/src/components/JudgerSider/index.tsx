import { IconChevronLeft, IconFile, IconHistory } from "@douyinfe/semi-icons";
import { Nav } from "@douyinfe/semi-ui";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getJudgableProblemList } from "../../api/judger";
interface Item {
  id: number;
  typeId: number;
  title: string;
  content: string;
  point: number;
  contest_id: number;
  case_version: number;
  index: number;
  config: string;
  metadata: Record<string, string>;
}

const JudgerSider = () => {
  const navigate = useNavigate();
  const { contestId } = useParams();
  const [judgableProblems, setJudgableProblems] = useState([]);
  useEffect(() => {
    getJudgableProblemList("1")
      .then((res) => {
        const data = res.data.results.filter(
          () => true
          // item.contest_id === parseInt(contestId!)
        );
        setJudgableProblems(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [contestId]);

  const items = [
    {
      itemKey: "back",
      text: "返回列表",
      icon: <IconChevronLeft size="large" />,
    },
    {
      itemKey: "processing",
      text: "批改",
      icon: <IconFile size="large" />,
      items: judgableProblems.map((item: Item) => ({
        itemKey: item.id,
        text: item.title,
      })),
    },
    {
      itemKey: "judged-list",
      text: "已批改答案",
      icon: <IconHistory size="large" />,
    },
  ];
  return (
    <>
      <Nav
        style={{ maxWidth: 220, height: "100%" }}
        className="sidebar"
        onSelect={({ itemKey }) => {
          if (itemKey === "back") {
            navigate("/judger/contest");
          } else if (typeof itemKey === "number") {
            navigate(`problem/${itemKey.toString()}`);
          }
        }}
        items={items}
        footer={{
          collapseButton: true,
        }}
      />
    </>
  );
};
export default JudgerSider;
