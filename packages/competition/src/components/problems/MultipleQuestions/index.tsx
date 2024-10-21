import { useState, useEffect } from "react";
import { Badge, Button, CheckboxGroup } from "@ui-aurora/react";
import styles from "./index.module.scss";

interface ProblemInfo {
  key: string;
  select: string[];
}

export const MultipleQuestions = () => {
  const [selected, setSelected] = useState<string[]>([]);

  useEffect(() => {
    // Fetch stored answers from localStorage when the component mounts
    const problemsInfo = localStorage.getItem("problems-info");
    if (problemsInfo) {
      const lastProblemsInfo: ProblemInfo[] = JSON.parse(problemsInfo);
      const currentProblem = lastProblemsInfo.find(
        (problemInfo) => problemInfo.key === "hi",
      );

      if (currentProblem) {
        setSelected(currentProblem.select); // Set default value from localStorage
      }
    }
  }, []); // Empty dependency array ensures this runs only on component mount

  const handleCheckboxChange = (newSelected: string[]) => {
    console.log("新的选择", newSelected);
    setSelected(newSelected);
  };

  const handleSave = () => {
    if (selected.length > 0) {
      const problemsInfo = localStorage.getItem("problems-info");
      const currentProblemsInfo: ProblemInfo[] = [
        { key: "hi", select: selected },
      ];

      if (!problemsInfo) {
        // Store new data if localStorage is empty
        localStorage.setItem(
          "problems-info",
          JSON.stringify(currentProblemsInfo),
        );
      } else {
        const lastProblemsInfo: ProblemInfo[] = JSON.parse(problemsInfo);

        // Update or add problem information
        const updatedProblemsInfo = lastProblemsInfo.map((problemInfo) =>
          problemInfo.key === "hi"
            ? { ...problemInfo, select: selected }
            : problemInfo,
        );

        const problemExists = lastProblemsInfo.some(
          (problemInfo) => problemInfo.key === "hi",
        );
        if (!problemExists) {
          updatedProblemsInfo.push({ key: "hi", select: selected });
        }

        localStorage.setItem(
          "problems-info",
          JSON.stringify(updatedProblemsInfo),
        );
      }
    }
  };

  return (
    <>
      <ol style={{ width: "40%" }}>
        <li>
          <div className={styles.container}>
            <Badge content="多选题" size="small" type="info" />
            <span>(5分)这是第一个问题?</span>
          </div>
          <CheckboxGroup
            value={selected}
            direction="column"
            onChange={handleCheckboxChange}
            options={[
              {
                key: 1,
                label: "nodejs",
                value: "node",
              },
              {
                key: 2,
                label: "nestjs",
                value: "nest",
              },
              {
                key: 3,
                label: "nextjs",
                value: "next",
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
        <Button shadow="none" onClick={handleSave}>
          保存
        </Button>
        <Button shadow="none">下一题</Button>
      </div>
    </>
  );
};
