import { useState, useCallback, useMemo } from "react";
import { produce } from "immer";
import {
  Modal,
  Button,
  Typography,
  Input,
  Toast,
  Select,
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
import React from "react";

const ProblemTypeMap = {
  '25': "gojudge-classic-algo",
  '26': "freshcup-single-choice", 
  '27': "freshcup-multiple-choice",
  '28': "freshcup-short-answer"
} as const;
const ProblemTypeMapReverse = {
    "gojudge-classic-algo": '25',
    "freshcup-single-choice": '26', 
    "freshcup-multiple-choice": '27',
    "freshcup-short-answer": '28'
  } as const;

interface EditMadalProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  problemData: ProblemData;
  setProblemData: (problemData: ProblemData) => void;
  isNew: boolean;
}

type ProblemDetailKey = keyof ProblemData;

// 懒加载 Monaco Editor
const MonacoEditor = React.lazy(() => import("@monaco-editor/react"));

// 使用 React.memo 包装 Monaco Editor 组件
const EditorWrapper = React.memo(({ value, onChange, height, options }: any) => (
  <React.Suspense fallback={<div>加载中...</div>}>
    <MonacoEditor
      height={height}
      language="toml"
      value={value}
      onChange={onChange}
      options={options}
    />
  </React.Suspense>
));

function EditModal(props: EditMadalProps) {
    const { visible, setVisible, problemData, setProblemData, isNew } = props;
    const jsonConfig = useMemo(() => 
        problemData?.config ? TomlParse(problemData.config) : {}
    , [problemData?.config]);
    const [optionList, setOptionList] = useState<string[]>(["A", "B", "C"]);
    const [loading, setLoading] = useState(false);
    const [editorIsErr, setEditorIsErr] = useState(false);
//   console.log(111,problemData)
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
        const nextOption = String.fromCharCode(65 + optionList.length); // Generate next letter (A, B, C, etc)
        newList.push(nextOption);
        setOptionList(newList);
      }
    }
  }

    const handleEditorChange = useCallback((value: string | undefined) => {
        try {
            const parsed = TomlParse(value || "");
            if (parsed) {
                setEditorIsErr(false);
                setProblemDataImmer("config", TomlStringify(parsed));
            }
        } catch {
            if (!editorIsErr) {
                setEditorIsErr(true);
            }
        }
    }, [editorIsErr, setProblemDataImmer]);

    const handleSubmit = useCallback(() => {
        setLoading(true);
        if (
            problemData.title &&
            jsonConfig.length !== 0 &&
            problemData.content &&
            problemData.point &&
            (ProblemTypeMap[problemData.typeId as keyof typeof ProblemTypeMap] === "freshcup-short-answer" || 
            ProblemTypeMap[problemData.typeId as keyof typeof ProblemTypeMap] === "gojudge-classic-algo" || 
            optionList.length !== 0)
        ) {
            const action = isNew ? addProblem : editProblem;
            action(problemData)
                .then((res) => {
                    if (res?.data?.success) {
                        Toast.success(isNew ? "题目创建成功！" : "题目修改成功！");
                        setVisible(false);
                    } else {
                        Toast.error(res?.data?.errMsg || (isNew ? "创建失败" : "修改失败"));
                    }
                })
                .finally(() => {
                    setLoading(false);
                });
        } else {
            Toast.warning("似乎还有内容没有填写喵");
            setLoading(false);
        }
    }, [problemData, jsonConfig, optionList, isNew, setVisible]);

    // 使用 useMemo 优化 editor options
    const editorOptions = useMemo(() => ({
        fontSize: 14,
        scrollBeyondLastLine: false,
        minimap: {
            enabled: false,
        },
        scrollbar: {
            verticalScrollbarSize: 6,
            horizontalScrollbarSize: 6,
        },
    }), []);

    // 在EditorWrapper前添加一个处理文件上传的函数
    const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const content = e.target?.result as string;
                try {
                    // 验证是否为有效的TOML
                    const parsed = TomlParse(content);
                    if (parsed) {
                        setProblemDataImmer("config", content);
                        Toast.success("TOML文件导入成功");
                    }
                } catch (error) {
                    Toast.error("无效的TOML文件格式");
                }
            };
            reader.readAsText(file);
        }
    }, [setProblemDataImmer]);

    return (
        <Modal
            title={isNew ? "新增题目" : "题目编辑"}
            visible={visible}
            onOk={handleSubmit}
            onCancel={() => setVisible(false)}
            closeOnEsc={true}
            maskClosable={true}
            lazyRender={true}
            width={"90%"}
        >
            <div style={{ display: "flex", width: "100%", gap: "24px" }}>
                <div style={{ display: "flex", flexDirection: "column", width: "40%" }}>
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
                            value={ProblemTypeMap[problemData.typeId as keyof typeof ProblemTypeMap]}
                            onChange={(value) => {
                                console.log(value)
                                setProblemDataImmer("typeId", ProblemTypeMapReverse[value as keyof typeof ProblemTypeMapReverse]);
                            }}
                        >
                            <Select.Option value="freshcup-single-choice">
                                单选题
                            </Select.Option>
                            <Select.Option value="freshcup-multiple-choice">
                                多选题
                            </Select.Option>
                            <Select.Option value="freshcup-short-answer">
                                简答题
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
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                            <Typography.Text strong className="edit-modal-item-necessary">
                                题干内容（支持Markdown语法）
                            </Typography.Text>
                            <div>
                                <input
                                    type="file"
                                    accept=".md,.markdown"
                                    onChange={(event) => {
                                        const file = event.target.files?.[0];
                                        if (file) {
                                            const reader = new FileReader();
                                            reader.onload = (e) => {
                                                const content = e.target?.result as string;
                                                setProblemDataImmer("content", content);
                                                Toast.success("Markdown文件导入成功");
                                            };
                                            reader.readAsText(file);
                                        }
                                    }}
                                    style={{ display: 'none' }}
                                    id="markdown-upload"
                                />
                                <Button
                                    theme="light"
                                    onClick={() => document.getElementById('markdown-upload')?.click()}
                                >
                                    导入Markdown
                                </Button>
                            </div>
                        </div>
                        <textarea
                            style={{
                                width: '75%',
                                height: '400px', 
                                resize: 'none',
                                marginTop: '8px',
                                padding: '12px 16px',
                                fontSize: '14px',
                                lineHeight: '1.6',
                                color: '#1C1F23',
                                backgroundColor: '#fff',
                                border: '1px solid #E5E6EB',
                                borderRadius: '6px',
                                transition: 'all 0.2s ease',
                                outline: 'none',
                                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                            }}
                            value={problemData.content}
                            onChange={(e) => {
                                setProblemDataImmer("content", e.target.value);
                            }}
                            onFocus={(e) => {
                                const target = e.target as HTMLTextAreaElement;
                                target.style.borderColor = '#6B7280';
                                target.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05), 0 0 0 3px rgba(99, 102, 241, 0.1)';
                            }}
                            onBlur={(e) => {
                                const target = e.target as HTMLTextAreaElement;
                                target.style.borderColor = '#E5E6EB';
                                target.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
                            }}
                            onMouseEnter={(e) => {
                                const target = e.target as HTMLTextAreaElement;
                                target.style.borderColor = '#6B7280';
                            }}
                            onMouseLeave={(e) => {
                                const target = e.target as HTMLTextAreaElement;
                                if(target !== document.activeElement) {
                                    target.style.borderColor = '#E5E6EB';
                                }
                            }}
                        />
                    </div>

                    {ProblemTypeMap[problemData.typeId as keyof typeof ProblemTypeMap] === "freshcup-short-answer" ||
                    ProblemTypeMap[problemData.typeId as keyof typeof ProblemTypeMap] === "gojudge-classic-algo" ? null : (
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
                                    {optionList.map((value: string, index: number) => {
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
                                    })}
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
                    {ProblemTypeMap[problemData.typeId as keyof typeof ProblemTypeMap] === "freshcup-single-choice" ||
                    ProblemTypeMap[problemData.typeId as keyof typeof ProblemTypeMap] === "freshcup-multiple-choice" ||
                    ProblemTypeMap[problemData.typeId as keyof typeof ProblemTypeMap] === "freshcup-short-answer" ? (
                        <div className="edit-modal-item">
                            <Typography.Text strong className="edit-modal-item-necessary">
                                正确答案
                            </Typography.Text>
                            {ProblemTypeMap[problemData.typeId as keyof typeof ProblemTypeMap] === "freshcup-single-choice" ||
                            ProblemTypeMap[problemData.typeId as keyof typeof ProblemTypeMap] === "freshcup-multiple-choice" ? (
                                <Select
                                    multiple={ProblemTypeMap[problemData.typeId as keyof typeof ProblemTypeMap] === "freshcup-multiple-choice"}
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
                                    {optionList.map((_: string, index: number) => {
                                        return (
                                            <Select.Option
                                                key={index}
                                                value={String.fromCharCode(index + 65)}
                                            >
                                                {String.fromCharCode(index + 65)}
                                            </Select.Option>
                                        );
                                    })}
                                </Select>
                            ) : (
                                <Input
                                    placeholder="请输入正确答案"
                                    value={jsonConfig.ReferenceAnswer as string}
                                    onChange={(value) => {
                                        jsonConfig.ReferenceAnswer = value;
                                        setProblemDataImmer("config", TomlStringify(jsonConfig));
                                    }}
                                />
                            )}
                        </div>
                    ) : null}
                    {ProblemTypeMap[problemData.typeId as keyof typeof ProblemTypeMap] === "gojudge-classic-algo" ? (
                        <div className="edit-modal-item">
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                                <Typography.Text strong className="edit-modal-item-necessary">
                                    配置文件
                                </Typography.Text>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    <input
                                        type="file"
                                        accept=".toml"
                                        onChange={handleFileUpload}
                                        style={{ display: 'none' }}
                                        id="toml-upload"
                                    />
                                    <Button
                                        theme="light"
                                        onClick={() => document.getElementById('toml-upload')?.click()}
                                    >
                                        导入TOML
                                    </Button>
                                    <Button
                                        theme="light"
                                        onClick={() => {
                                            Modal.info({
                                                title: '配置文件编辑',
                                                content: (
                                                    <div style={{ width: '80vw', height: '80vh' }}>
                                                        <EditorWrapper
                                                            height="calc(80vh - 100px)"
                                                            value={problemData.config}
                                                            onChange={handleEditorChange}
                                                            options={editorOptions}
                                                        />
                                                    </div>
                                                ),
                                                width: '85vw',
                                                centered: true,
                                                maskClosable: false,
                                            });
                                        }}
                                    >
                                        放大编辑
                                    </Button>
                                </div>
                            </div>
                            <EditorWrapper
                                height={"200px"}
                                value={problemData.config}
                                onChange={handleEditorChange}
                                options={editorOptions}
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
                        style={{ width: 120, marginBottom: 16, marginLeft: "10%" }}
                        loading={loading}
                        onClick={handleSubmit}
                    >
                        {isNew ? "保存新增" : "保存修改"}
                    </Button>
                </div>
                <div style={{ 
                    display: "flex", 
                    flexDirection: "column", 
                    width: "50%",
                    alignItems: "center"
                }}>
                    <div className="edit-modal-item" style={{ width: "100%" }}>
                        <Typography.Text strong>题目预览 : </Typography.Text>
                        <MarkdownRender text={problemData.content} />
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default React.memo(EditModal);
