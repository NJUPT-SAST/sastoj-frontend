import { useState } from "react";
import { produce } from "immer";
import {
  Modal,
  Button,
  Typography,
  Input,
  Toast,
  Select,
  TextArea,
  InputNumber,
} from "@douyinfe/semi-ui";
import {
  IconTriangleDown,
  IconTriangleUp,
  IconPlusCircle,
  IconMinusCircle,
} from "@douyinfe/semi-icons";
import { addProblem, editProblem } from "../../api/admin";
import { ProblemData } from "../../types/ProblemTypes";
import { parse as TomlParse, stringify as TomlStringify } from "smol-toml";
import "./index.scss";
import MarkdownRender from "../MarkdownRender";

interface EditMadalProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  problemData: ProblemData;
  setProblemData: (problemData: ProblemData) => void;
  isNew: boolean;
}

type ProblemDetailKey = keyof ProblemData;
function EditModal(props: EditMadalProps) {
  const { visible, setVisible, problemData, setProblemData, isNew } = props;
  const jsonConfig = TomlParse(problemData.config);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [optionList, setOptionList] = useState<any>([
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
  ]);
  const [loading, setLoading] = useState(false);

  function setProblemDetailImmer(
    key: ProblemDetailKey,
    value: ProblemData[typeof key]
  ) {
    setProblemData(
      produce(problemData, (draft) => {
        (draft[key] as ProblemData[typeof key]) = value;
      })
    );
  }

  function updateList(index: number | null) {
    if (index !== null) {
      const newList = [...optionList];
      newList.splice(index, 1);
      setOptionList(newList);
    } else {
      if (optionList.length >= 8) {
        Toast.warning("选项太多了啊，别再冲啦，出题人先生");
      } else {
        const newList = [...optionList];
        newList.push(null);
        setOptionList(newList);
      }
    }
  }

  return (
    <Modal
      title={isNew ? "新增题目" : "题目编辑"}
      visible={visible}
      onOk={() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        isNew ? addProblem(problemData) : editProblem(problemData);
      }}
      onCancel={() => setVisible(false)}
      closeOnEsc={true}
      maskClosable={true}
      lazyRender={true}
      width={"80%"}
    >
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="edit-modal-item">
            <Typography.Text strong className="edit-modal-item-necessary">
              题目名称
            </Typography.Text>
            <Input
              style={{ width: 280 }}
              placeholder={"请输入题目名称"}
              value={problemData.title}
              onChange={(value) => {
                setProblemDetailImmer("title", value);
              }}
            />
          </div>
          <div className="edit-modal-item">
            <Typography.Text strong className="edit-modal-item-necessary">
              题型
            </Typography.Text>
            <Select
              placeholder="请选择题型"
              value={problemData.typeId}
              onChange={(value) => {
                console.log(value);
                setProblemDetailImmer("typeId", value);
              }}
            >
              <Select.Option value={0}>单选题</Select.Option>
              <Select.Option value={1}>多选题</Select.Option>
              <Select.Option value={2}>主观题</Select.Option>
            </Select>
          </div>
          <div className="edit-modal-item">
            <Typography.Text strong className="edit-modal-item-necessary">
              分值
            </Typography.Text>
            <InputNumber
              placeholder={"请输入分值"}
              value={problemData.point}
              formatter={(value) => `${value}`.replace(/\D/g, "")}
              onChange={(value) => {
                setProblemDetailImmer("point", Number(value));
              }}
              min={0}
              max={Number.MAX_SAFE_INTEGER}
            />
          </div>

          <div className="edit-modal-item">
            <Typography.Text strong className="edit-modal-item-necessary">
              题干内容（支持Markdown语法）
            </Typography.Text>
            <TextArea
              style={{ width: 280, height: 200 }}
              maxCount={10000}
              value={problemData.content}
              onChange={(value) => {
                setProblemDetailImmer("content", value);
              }}
            />
          </div>

          {problemData.typeId === "2" ? null : (
            <div className="edit-modal-item">
              <Typography.Text strong className="edit-modal-item-necessary">
                选项
              </Typography.Text>
              <p style={{ margin: 0 }}>
                <ul
                  style={{
                    width: 280,
                    display: "flex",
                    flexWrap: "wrap",
                    margin: 0,
                    paddingLeft: 0,
                  }}
                >
                  {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    optionList.map((value: any, index: number) => {
                      return (
                        <li
                          key={index}
                          style={{
                            margin: 4,
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <Button
                            type="danger"
                            theme="borderless"
                            icon={<IconMinusCircle />}
                            onClick={() => {
                              updateList(index);
                            }}
                            style={{ marginRight: 4 }}
                          />
                          <Typography.Text style={{ width: 24 }}>
                            {String.fromCharCode(index + 65)}
                          </Typography.Text>
                          <Input
                            value={value}
                            onChange={(e) => {
                              const option_list_copy = [...optionList];
                              option_list_copy[index] = e;
                              setOptionList(option_list_copy);
                            }}
                          />
                          <Button
                            disabled={index === 0}
                            style={{ marginLeft: 6 }}
                            icon={<IconTriangleUp />}
                            onClick={() => {
                              const option_list_copy = [...optionList];
                              console.log(option_list_copy);
                              const temp = option_list_copy[index];
                              option_list_copy[index] =
                                option_list_copy[index - 1];
                              option_list_copy[index - 1] = temp;
                              setOptionList(option_list_copy);
                            }}
                          />
                          <Button
                            disabled={index === optionList.length - 1}
                            style={{ marginLeft: 6 }}
                            icon={<IconTriangleDown />}
                            onClick={() => {
                              const option_list_copy = [...optionList];
                              console.log(option_list_copy);
                              const temp = option_list_copy[index];
                              option_list_copy[index] =
                                option_list_copy[index + 1];
                              option_list_copy[index + 1] = temp;
                              setOptionList(option_list_copy);
                            }}
                          />
                        </li>
                      );
                    })
                  }
                  <div
                    style={{
                      margin: 4,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                    onClick={() => updateList(null)}
                  >
                    <Button
                      theme="borderless"
                      icon={<IconPlusCircle />}
                      style={{
                        marginRight: 4,
                        color: "var(--semi-color-info)",
                      }}
                    ></Button>
                    <Typography.Text>新增选项</Typography.Text>
                  </div>
                </ul>
              </p>
            </div>
          )}
          {problemData.typeId === "0" || problemData.typeId === "1" ? (
            <div className="edit-modal-item">
              <Typography.Text strong className="edit-modal-item-necessary">
                正确答案
              </Typography.Text>
              <Select
                multiple={problemData.typeId === "1"}
                value={jsonConfig.ReferenceAnswer as string}
                onChange={(value) => {
                  if (typeof value === "string") {
                    jsonConfig.ReferenceAnswer = value;
                    setProblemDetailImmer("config", TomlStringify(jsonConfig));
                  } else if (typeof value === "object")
                    jsonConfig.ReferenceAnswer = value;
                  setProblemDetailImmer("config", TomlStringify(jsonConfig));
                }}
              >
                {
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  optionList.map((_: any, index: number) => {
                    return (
                      <Select.Option
                        key={index}
                        value={String.fromCharCode(index + 65)}
                      >
                        {String.fromCharCode(index + 65)}
                      </Select.Option>
                    );
                  })
                }
              </Select>
            </div>
          ) : null}
          {problemData.typeId === "2" ? (
            <div className="edit-modal-item">
              <Typography.Text strong className="edit-modal-item-necessary">
                正确答案
              </Typography.Text>
              <TextArea
                autosize
                maxCount={10000}
                value={jsonConfig.ReferenceAnswer as string}
                onChange={(value) => {
                  jsonConfig.ReferenceAnswer = value;
                  setProblemDetailImmer("config", TomlStringify(jsonConfig));
                }}
              ></TextArea>
            </div>
          ) : null}

          <Button
            type="primary"
            theme="solid"
            htmlType="submit"
            style={{ width: 80, marginBottom: 16 }}
            loading={loading}
            onClick={() => {
              setLoading(true);
              // 表单验证，确保必要字段不为空
              if (
                problemData.title &&
                jsonConfig.length !== 0 &&
                problemData.content &&
                problemData.point &&
                (problemData.typeId === "2" || optionList.length !== 0) // 非主观题选项不能为空
              ) {
                if (isNew) {
                  // 新增题目
                  addProblem(problemData).then((res) => {
                    if (res?.data?.success) {
                      Toast.success("题目创建成功！");
                      setVisible(false);
                    } else {
                      Toast.error(res?.data?.errMsg);
                    }
                  });
                  setTimeout(() => {
                    setLoading(false);
                  }, 500);
                } else {
                  // 修改题目
                  editProblem(problemData).then((res) => {
                    if (res?.data?.success) {
                      Toast.success("题目修改成功！");
                      setVisible(false);
                    } else {
                      Toast.error(res?.data?.errMsg);
                    }
                  });
                  setTimeout(() => {
                    setLoading(false);
                  }, 500);
                }
              } else {
                // 表单未填写完整的提示
                Toast.warning("似乎有内容还没有填写");
                setLoading(false);
              }
            }}
          >
            {isNew ? "新增" : "修改"}
          </Button>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", margin: "0 auto" }}
        >
          <div className="edit-modal-item">
            <Typography.Text strong>题目预览</Typography.Text>
            <MarkdownRender text={problemData.content} />
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default EditModal;
