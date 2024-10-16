import React, { useEffect, useState } from "react";
import { produce } from "immer"
import {
  Modal,
  Button,
  Popconfirm,
  SideSheet,
  Table,
  Tag,
  Typography,
  Input,
  Toast,
  Select,
  TextArea,
  InputNumber,
  Tabs,
  TabPane,
} from "@douyinfe/semi-ui";
import {
  IconTriangleDown,
  IconTriangleUp,
  IconPlusCircle,
  IconMinusCircle,
} from "@douyinfe/semi-icons";
import { useParams } from "react-router-dom";
// import {
//   addProblem,
//   deleteProblem,
//   getProblemList,
//   problemInfo,
//   sortContest,
//   updateProblem,
// } from "../../../../api/admin";
import { ProblemDetail } from "../QuestionManagement/index"
import "./index.scss";
// import MarkdownRender from "../../../../components/Markdown";


interface EditMadalProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  problemDetail: ProblemDetail;
  setProblemDetail: (problemDetail: ProblemDetail) => void;
}

type ProblemDetailKey = keyof ProblemDetail
function EditModal(props: EditMadalProps) {
  const { visible, setVisible, problemDetail, setProblemDetail } = props;

  function setProblemDetailImmer(key: ProblemDetailKey, value: ProblemDetail[typeof key]) {
    setProblemDetail(
      produce(problemDetail, (draft) => {
        (draft[key] as ProblemDetail[typeof key]) = value;
      })
    );
  }
  
  


  return (
    <Modal
    title = {problemDetail.new ? "新增题目" : "题目编辑"}
    visible = {visible}
    onOk={() => setVisible(false)}
    onCancel={() => setVisible(false)}
    closeOnEsc={true}
    maskClosable={true}
    lazyRender={true}
    size="large"
    height={"90%"}
    >
      <div>
        <div>
        <Typography.Text
        strong>
         题目名称
        </Typography.Text>
        <Input
        placeholder={"请输入题目名称"} 
        value={problemDetail.problemName}
        onChange={(value) => {
          setProblemDetailImmer("problemName", value)
        }} />
        </div>
      </div>
    </Modal>
  );
}


export default EditModal;