import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSubmissionsbyProblemId } from "../../api/judger";
import { Pagination, Table } from "@douyinfe/semi-ui";
import "./index.scss";
interface Submission {
  id: number;
  code: string;
  status: number;
  point: number;
  create_time: string;
}

const SubmissionList = () => {
  const { problemId } = useParams();
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const navigate = useNavigate();
  const handleAffirm = (key: string) => {
    navigate(`check/${key}`);
  };
  const columns = [
    {
      title: "题目编号",
      dataIndex: "key",
    },
    {
      title: "状态",
      dataIndex: "status",
    },
    {
      title: "得分",
      dataIndex: "point",
    },
    {
      title: "提交时间",
      dataIndex: "create_time",
    },
    {
      title: "操作",
      render: (record: { key: string }) => (
        <a onClick={() => handleAffirm(record.key)}>批改</a>
      ),
    },
  ];
  const data = submissions.map((submission) => {
    return {
      key: submission.id,
      code: submission.code,
      status: submission.status,
      point: submission.point,
      create_time: submission.create_time,
    };
  });
  useEffect(() => {
    getSubmissionsbyProblemId(parseInt(problemId!)).then((res) => {
      // console.log(res);
      setSubmissions(res.data.submissions);
    });
  }, [problemId]);
  return (
    <div className="submission-container">
      <Table columns={columns} dataSource={data} pagination={false}></Table>
      <Pagination
        total={submissions.length}
        showTotal
        showSizeChanger
        style={{ marginTop: "12px" }}
        pageSizeOpts={[10, 50, 100, 200, 500]}
      ></Pagination>
    </div>
  );
};
export default SubmissionList;
