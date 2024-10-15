import { useEffect, useState } from "react";
import { getContestList } from "../../api/admin";
import "./index.scss";
import { Card, Pagination, Spin, Typography } from "@douyinfe/semi-ui";
import { useNavigate } from "react-router-dom";
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
interface Filter {
  pageNum: number;
  pageSize: number;
}
const ContestListPage = () => {
  const [contests, setContests] = useState<Contest[]>([]);
  const [contestListLoading, setContextListLoading] = useState<boolean>(false);
  const [totalContest, setTotalContest] = useState<number>(0);
  const [filter, setFilter] = useState<Filter>({
    pageNum: 1,
    pageSize: 12,
  });
  const navigate = useNavigate();
  const { Text } = Typography;

  const handleClick = (id: string) => {
    console.log("查看");
    navigate("/admin/contest/" + id);
  };

  useEffect(() => {
    setContextListLoading(true);
    getContestList(1, 10).then((res) => {
      setContests(res.data.contests);
      setTotalContest(res.data.contests.length);
      setContextListLoading(false);
    });
  }, []);

  return (
    <div className="contest-list-container">
      <Spin size="large" spinning={contestListLoading}>
        <div className="contests-container">
          {contests.map((contest, index) => {
            return (
              <div key={index} className="contest">
                <Card
                  title={contest.title}
                  style={{ maxWidth: 300 }}
                  headerExtraContent={
                    <Text link onClick={() => handleClick(contest.id)}>
                      查看
                    </Text>
                  }
                >
                  {contest.description.length > 50
                    ? contest.description.slice(0, 50) + "..."
                    : contest.description}
                </Card>
              </div>
            );
          })}
        </div>
      </Spin>

      <Pagination
        total={totalContest}
        pageSize={filter.pageSize}
        pageSizeOpts={[12, 24, 48]}
        onPageChange={(currentPage: number) => {
          setFilter({ ...filter, pageNum: currentPage });
        }}
        onPageSizeChange={(pageSize: number) => {
          setFilter({ ...filter, pageSize });
        }}
        showTotal
        showSizeChanger
        className="pagination"
      ></Pagination>
    </div>
  );
};
export default ContestListPage;
