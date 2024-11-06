import { useState, useEffect } from "react";
import { Badge, Button, CheckboxGroup, CheckboxProps } from "@ui-aurora/react";
import styles from "./index.module.scss";
import { useSwrSubmit } from "../../../swrHooks/submit";

interface ProblemInfo {
  key: string;
  select: string[];
}

interface MultipleQuestionsProps {
  score: number;
  title: string;
  options: CheckboxProps[];
  id: string;
}

export const MultipleQuestions = (props: MultipleQuestionsProps) => {
  const [selected, setSelected] = useState<string[]>([]);
  const { trigger } = useSwrSubmit();

  useEffect(() => {
    // Fetch stored answers from localStorage when the component mounts
    const problemsInfo = localStorage.getItem("problems-info");
    if (problemsInfo) {
      const lastProblemsInfo: ProblemInfo[] = JSON.parse(
        problemsInfo,
      ) as unknown as ProblemInfo[];
      const currentProblem = lastProblemsInfo.find(
        (problemInfo) => problemInfo.key === props.id,
      );

      if (currentProblem) {
        setSelected(currentProblem.select); // Set default value from localStorage
      }
    }
  }, []); // Empty dependency array ensures this runs only on component mount

  const handleCheckboxChange = (newSelected: string[]) => {
    setSelected(newSelected);
  };

  const handleSave = () => {
    if (selected.length > 0) {
      const problemsInfo = localStorage.getItem("problems-info");
      const currentProblemsInfo: ProblemInfo[] = [
        { key: props.id, select: selected },
      ];

      if (!problemsInfo) {
        // Store new data if localStorage is empty
        localStorage.setItem(
          "problems-info",
          JSON.stringify(currentProblemsInfo),
        );
      } else {
        const lastProblemsInfo: ProblemInfo[] = JSON.parse(
          problemsInfo,
        ) as unknown as ProblemInfo[];

        // Update or add problem information
        const updatedProblemsInfo = lastProblemsInfo.map((problemInfo) =>
          problemInfo.key === props.id
            ? { ...problemInfo, select: selected }
            : problemInfo,
        );

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

        void trigger({ code: selected.join(" "), language: "" });
      }
    }
  };

  return (
    <div style={{ height: "98%", display: "flex", flexDirection: "column" }}>
      <div className={styles.container}>
        <Badge content="多选题" size="small" type="info" />
        <span>
          ({props.score}分){props.title}
        </span>
        <CheckboxGroup
          value={selected}
          direction="column"
          onChange={handleCheckboxChange}
          options={props.options}
        />
      </div>
      <div
        style={{
          display: "flex",
          gap: "4px",
          justifyContent: "end",
        }}
      >
        <Button shadow="none" onClick={handleSave}>
          提交
        </Button>
        <Button shadow="none">下一题</Button>
      </div>
    </div>
  );
};
