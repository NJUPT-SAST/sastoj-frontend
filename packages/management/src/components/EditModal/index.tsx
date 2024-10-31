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
import MonacoEditor from "@monaco-editor/react";
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
  const [optionList, setOptionList] = useState<any>(["A", "B", "C"]); //改成problem.metaData
  const [loading, setLoading] = useState(false);
  const [editorIsErr, setEditorIsErr] = useState(false);

  function setProblemDataImmer(
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
      width={"60%"}
    >
      <div style={{ display: "flex", width: "100%" }}>
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
                setProblemDataImmer("title", value);
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
                setProblemDataImmer("typeId", value);
              }}
            >
              <Select.Option value="freshcup-single-choice">
                单选题
              </Select.Option>
              <Select.Option value="freshcup-multiple-choice">
                多选题
              </Select.Option>
              <Select.Option value="freshcup-short-answer">
                填空题
              </Select.Option>
              <Select.Option value="gojudge-classic-algo">算法题</Select.Option>
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
                setProblemDataImmer("point", Number(value));
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
              style={{ width: 280 }}
              maxCount={10000}
              value={problemData.content}
              onChange={(value) => {
                setProblemDataImmer("content", value);
              }}
            />
          </div>

          {problemData.typeId === "freshcup-short-answer" ||
          problemData.typeId === "gojudge-classic-algo" ? null : (
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
          {problemData.typeId === "freshcup-single-choice" ||
          problemData.typeId === "freshcup-multiple-choice" ||
          problemData.typeId === "freshcup-short-answer" ? (
            <div className="edit-modal-item">
              <Typography.Text strong className="edit-modal-item-necessary">
                正确答案
              </Typography.Text>
              {problemData.typeId === "freshcup-single-choice" ||
              problemData.typeId === "freshcup-multiple-choice" ? (
                <Select
                  multiple={problemData.typeId === "freshcup-multiple-choice"}
                  value={jsonConfig.ReferenceAnswer as string}
                  onChange={(value) => {
                    if (typeof value === "string") {
                      jsonConfig.ReferenceAnswer = value;
                      setProblemDataImmer("config", TomlStringify(jsonConfig));
                    } else if (typeof value === "object")
                      jsonConfig.ReferenceAnswer = value;
                    setProblemDataImmer("config", TomlStringify(jsonConfig));
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
              ) : (
                <Input
                  value={jsonConfig.ReferenceAnswer as string}
                  onChange={(value) => {
                    jsonConfig.ReferenceAnswer = value;
                    setProblemDataImmer("config", TomlStringify(jsonConfig));
                  }}
                />
              )}
            </div>
          ) : null}
          {problemData.typeId === "gojudge-classic-algo" ? (
            <div className="edit-modal-item">
              <Typography.Text strong className="edit-modal-item-necessary">
                配置文件
              </Typography.Text>
              <MonacoEditor
                height={"200px"}
                language="toml"
                onChange={(value: string | undefined) => {
                  try {
                    const parsed = TomlParse(value || "");
                    if (parsed) {
                      setEditorIsErr(false);
                      setProblemDataImmer("config", TomlStringify(parsed));
                    }
                  } catch (e) {
                    console.log(e);
                    if (!editorIsErr) {
                      setEditorIsErr(true);
                    }
                  }
                }}
                value={problemData.config}
                options={{
                  fontSize: 14,
                  scrollBeyondLastLine: false,
                  minimap: {
                    enabled: false,
                  },
                  scrollbar: {
                    verticalScrollbarSize: 6,
                    horizontalScrollbarSize: 6,
                  },
                }}
              />
              {editorIsErr && (
                <div
                  style={{
                    color: "#d32f2f",
                    backgroundColor: "#fdecea",
                    border: "1px solid #f5c2c7",
                    borderRadius: "4px",
                    padding: "8px 12px",
                    display: "flex",
                    alignItems: "center",
                    marginTop: "20px",
                    marginLeft: "10%",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "8px",
                      color: "#d32f2f",
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v2m0 4h.01M6.455 4.544A10 10 0 0117.546 19.455m0-14.911A10 10 0 016.455 19.455"
                    />
                  </svg>
                  TOML 文件格式不正确捏
                </div>
              )}
            </div>
          ) : null}

          <Button
            type="primary"
            theme="solid"
            htmlType="submit"
            style={{ width: 80, marginBottom: 16, marginLeft: "10%" }}
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
                Toast.warning("似乎有内容还没有填写");
                setLoading(false);
              }
            }}
          >
            {isNew ? "保存新增" : "保存修改"}
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "0 auto",
            whiteSpace: "no-wrap",
            width: "min(400px,50vw)",
            flex: 1,
          }}
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
