import { Badge, Button, RadioGroup } from "@ui-aurora/react";
import styles from "./index.module.scss";
import { useState, useEffect } from "react";

interface ProblemInfo {
  select: string | number;
  key: string;
}

export const SingleQuestion = () => {
  const [selected, setSelected] = useState<string | number>();

  // 从 localStorage 获取默认值
  useEffect(() => {
    const problemsInfo = localStorage.getItem("problems-info");
    if (problemsInfo) {
      const lastProblemsInfo: ProblemInfo[] = JSON.parse(
        problemsInfo,
      ) as unknown as ProblemInfo[];
      const foundProblemInfo = lastProblemsInfo.find(
        (problemInfo) => problemInfo.key === "hello",
      );
      if (foundProblemInfo) {
        setSelected(foundProblemInfo.select);
      }
    }
  }, []);

  return (
    <>
      <ol style={{ width: "40%" }}>
        <li>
          <div className={styles.container}>
            <Badge content="单选题" size="small" type="info" />
            <span>(5分)这是第一个问题?</span>
          </div>
          <RadioGroup
            value={String(selected)}
            direction="vertical"
            onChange={(value) => {
              setSelected(value);
            }}
            options={[
              {
                label: "第一个最大的元素👨",
                value: "nodejs",
                size: "large",
              },
              {
                label: "第二个中等的元素👩",
                value: "vuejs",
                size: "large",
              },
              {
                label: "第三个最小的元素🧒",
                value: "react",
                size: "large",
              },
            ]}
          />
        </li>
      </ol>
      <div
        style={{
          display: "flex",
          gap: "4px",
          width: "40%",
          justifyContent: "end",
        }}
      >
        <Button
          shadow="none"
          onClick={() => {
            if (selected) {
              const problemsInfo = localStorage.getItem("problems-info");
              const currentProblemsInfo: ProblemInfo[] = [
                { key: "hello", select: selected },
              ];

              if (!problemsInfo) {
                // 如果 localStorage 中没有数据，直接存入
                localStorage.setItem(
                  "problems-info",
                  JSON.stringify(currentProblemsInfo),
                );
              } else {
                // 如果有数据，则直接覆盖与 key 为 "hello" 的数据
                const lastProblemsInfo: ProblemInfo[] = JSON.parse(
                  problemsInfo,
                ) as unknown as ProblemInfo[];
                const updatedProblemsInfo = lastProblemsInfo.map(
                  (problemInfo) =>
                    problemInfo.key === "hello"
                      ? { ...problemInfo, select: selected }
                      : problemInfo,
                );

                // 如果 "hello" 不存在，添加新问题
                const problemExists = lastProblemsInfo.some(
                  (problemInfo) => problemInfo.key === "hello",
                );
                if (!problemExists) {
                  updatedProblemsInfo.push({ key: "hello", select: selected });
                }

                localStorage.setItem(
                  "problems-info",
                  JSON.stringify(updatedProblemsInfo),
                );
              }
            }
          }}
        >
          保存
        </Button>
        <Button shadow="none">下一题</Button>
      </div>
    </>
  );
};
