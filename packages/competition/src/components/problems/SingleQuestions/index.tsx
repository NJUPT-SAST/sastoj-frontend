import { Badge, Button, RadioGroup, RadioProps } from "@ui-aurora/react";
import styles from "./index.module.scss";
import { useState, useEffect } from "react";
import { useSwrSubmit } from "../../../swrHooks/submit";

interface ProblemInfo {
  select: string | number;
  key: string;
}

interface SingleQuestionProps {
  title: string;
  options: RadioProps[];
  score: number;
  id: string;
}

export const SingleQuestion = (props: SingleQuestionProps) => {
  const [selected, setSelected] = useState<string | number>();
  const { trigger } = useSwrSubmit();

  // 从 localStorage 获取默认值
  useEffect(() => {
    const problemsInfo = localStorage.getItem("problems-info");
    if (problemsInfo) {
      const lastProblemsInfo: ProblemInfo[] = JSON.parse(
        problemsInfo,
      ) as unknown as ProblemInfo[];
      const foundProblemInfo = lastProblemsInfo.find(
        (problemInfo) => problemInfo.key === props.id,
      );
      if (foundProblemInfo) {
        setSelected(foundProblemInfo.select);
      }
    }
  }, []);

  return (
    <div style={{ height: "98%", display: "flex", flexDirection: "column" }}>
      <div style={{ flexGrow: "1" }}>
        <div className={styles.container}>
          <Badge content="单选题" size="small" type="info" />
          <span>
            ({props.score}分){props.title}
          </span>
        </div>
        <RadioGroup
          value={String(selected)}
          direction="vertical"
          onChange={(value) => {
            setSelected(value);
          }}
          options={props.options ?? []}
        />
      </div>
      <div
        style={{
          display: "flex",
          gap: "4px",
          justifyContent: "end",
        }}
      >
        <Button
          shadow="none"
          onClick={() => {
            if (selected) {
              const problemsInfo = localStorage.getItem("problems-info");
              const currentProblemsInfo: ProblemInfo[] = [
                { key: props.id, select: selected },
              ];

              if (!problemsInfo) {
                // 如果 localStorage 中没有数据，直接存入
                localStorage.setItem(
                  "problems-info",
                  JSON.stringify(currentProblemsInfo),
                );
              } else {
                // 如果有数据，则直接覆盖与 key 为 props.id 的数据
                const lastProblemsInfo: ProblemInfo[] = JSON.parse(
                  problemsInfo,
                ) as unknown as ProblemInfo[];
                const updatedProblemsInfo = lastProblemsInfo.map(
                  (problemInfo) =>
                    problemInfo.key === props.id
                      ? { ...problemInfo, select: selected }
                      : problemInfo,
                );

                // 如果 props.id 不存在，添加新问题
                const problemExists = lastProblemsInfo.some(
                  (problemInfo) => problemInfo.key === props.id,
                );
                if (!problemExists) {
                  updatedProblemsInfo.push({ key: props.id, select: selected });
                }

                localStorage.setItem(
                  "problems-info",
                  JSON.stringify(updatedProblemsInfo),
                );

                void trigger({ code: String(selected), language: "" });
              }
            }
          }}
        >
          提交
        </Button>
        <Button shadow="none">下一题</Button>
      </div>
    </div>
  );
};
