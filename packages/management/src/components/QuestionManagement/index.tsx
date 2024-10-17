// import { IconTriangleDown, IconTriangleUp } from "@douyinfe/semi-icons";
import { Button, Popconfirm, Table, Tag} from "@douyinfe/semi-ui";
import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { getProblemList } from "../../api/admin";
import "./index.scss";

interface Problem {
  id: string;
  title: string; //题目名称
  content: string; //题目内容
  point: number; //题目分值
  contestId: string; //比赛id
  caseVersion: number; //题目版本
  index: number; //题目编号
  config: string; //题目配置
}

export default function QuestionManagement() {
  const [problems, setProblems] = useState<Problem[]>([]);

  useEffect(() => {
    getProblemList(1, 10).then((res) => {
      // console.log(res);

      setProblems(res.data.problems);
    });
  }, []);

  const columns = [
    {
      title: "序号",
      dataIndex: "id",
      render: (id: number) => {
        return id + 1;
      },
    },
    {
      title: "题目类型",
      dataIndex: "type_id",
      render: (typeId: string) => {
        return (
          <>
            {Number(typeId) === 0 ? (
              <Tag color={"blue"}>单选题</Tag>
            ) : Number(typeId) === 1 ? (
              <Tag color={"light-green"}>多选题</Tag>
            ) : (
              <Tag color={"pink"}>主观题</Tag>
            )}
          </>
        );
      },
    },
    { title: "题目编号", dataIndex: "index" },
    { title: "题目名称", dataIndex: "title" },
    { title: "分值", dataIndex: "point" },
    {
      title: "操作",
      render: (
        
      ) => {
        return (
          <>
            <Button
              theme="solid"
              onClick={() => {
                // 获取题目详细信息
              }}
            >
              编辑
            </Button>
            <Popconfirm
              title="确定是否要删除此题？"
              content="此操作将不可逆"
              onConfirm={() => {
                console.log("confirm");
                // console.log(text?.id);
                // deleteProblem(text?.id).then((res) => {
                //   console.log(res);
                //   if (res.data.success) {
                //     Toast.success(res?.data?.data);
                //     setRefresh(!refresh);
                //   } else Toast.error(res?.data?.errMsg);
                // });
              }}
            >
              <Button style={{ marginLeft: 12 }} theme="solid" type="danger">
                删除
              </Button>
            </Popconfirm>
          </>
        );
      },
    },
  ];

  return (
    <>
      <Button className="question-button">新增题目</Button>
      <Table columns={columns} dataSource={problems} pagination={false}></Table>
    </>
  );
}