import { useEffect, useState } from "react";
import { getContestList } from "../../api/admin";
import "./index.scss";
import { Card, Pagination, Typography } from "@douyinfe/semi-ui";
interface Contest {
  id: string;
  title: string; //比赛标题
  description: string; //比赛描述
  status: number; //比赛状态
  type: number;
  startTime: string;
  endTime: string;
  language: string;
  extraTime: number;
  createTime: string;
}

const ContestList = () => {
  const [contests, setContests] = useState<Contest[]>([]);
  const { Text } = Typography;

  useEffect(() => {
    getContestList(1, 10).then((res) => {
      setContests(res.data.contests);
    });
  }, []);

  return (
    <div>
      <div className="contests-container">
        {contests.map((contest, index) => {
          return (
            <div key={index} className="contest">
              <Card
                title={contest.title}
                style={{ maxWidth: 300 }}
                headerExtraContent={<Text link>查看</Text>}
              >
                {contest.description.length > 50
                  ? contest.description.slice(0, 50) + "..."
                  : contest.description}
              </Card>
            </div>
          );
        })}
      </div>
      <Pagination total={300} showSizeChanger className="pagination" showTotal></Pagination>

    </div>
  );
};
export default ContestList;
