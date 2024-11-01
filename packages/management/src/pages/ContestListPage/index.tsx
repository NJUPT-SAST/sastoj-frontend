import { useEffect, useState } from "react";
import { getContestList } from "../../api/admin";
import "./index.scss";
import { Button, Card, Pagination, Spin, Typography } from "@douyinfe/semi-ui";
import { useLocation, useNavigate } from "react-router-dom";
import { parseToken } from "@sast/oj-login/src/utils/parseToken";
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
  const location = useLocation(); // 获取当前路径
  const pathSegments = location.pathname.split("/"); // 按 `/` 分割路径

  const handleClick = (id: string) => {

    if (pathSegments.includes("admin")) navigate("/admin/contest/" + id);
    else if (pathSegments.includes("judger")) navigate("/judger/contest/" + id);
  };

  useEffect(() => {
    setContextListLoading(true);
    getContestList(1, 10).then((res) => {
      // console.log(res);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      setContests(res.contests);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      setTotalContest(res.contests.length);
      setContextListLoading(false);
    });
  }, []);

  const optionRender = () => {
    const token = localStorage.getItem("token") || "";
    if (parseToken(token) === "superadmin") {
      return (
        <div className="contest-create-button">
          <Button>主要按钮</Button>
        </div>
      );
    }
  };

  return (
    <>
      {optionRender()}
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
    </>
  );
};
export default ContestListPage;
