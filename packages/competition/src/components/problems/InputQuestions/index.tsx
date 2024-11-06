import { useState, useEffect } from "react";
import { Badge, Button, Input } from "@ui-aurora/react";
import styles from "./index.module.scss";
import { useSwrSubmit } from "../../../swrHooks/submit";

interface ProblemInfo {
  key: string;
  answer: string;
}

interface InputQuestionsProps {
  score: number;
  title: string;
}

export const InputQuestions = (props: InputQuestionsProps) => {
  const [inputValue, setInputValue] = useState<string>("");

  const { trigger } = useSwrSubmit();

  useEffect(() => {
    // Fetch stored answer from localStorage when the component mounts
    const problemsInfo = localStorage.getItem("problems-info");
    if (problemsInfo) {
      const lastProblemsInfo: ProblemInfo[] = JSON.parse(
        problemsInfo,
      ) as unknown as ProblemInfo[];
      const currentProblem = lastProblemsInfo.find(
        (problemInfo) => problemInfo.key === "hi",
      );
      if (currentProblem) {
        setInputValue(currentProblem.answer); // Set default value from localStorage
      }
    }
  }, []); // Empty dependency array ensures this runs only on component mount

  const handleInputChange = (
    value: string,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (value !== undefined) setInputValue(event.target.value);
  };

  const handleSave = () => {
    if (inputValue.trim()) {
      const problemsInfo = localStorage.getItem("problems-info");
      const currentProblemsInfo: ProblemInfo[] = [
        { key: "hi", answer: inputValue },
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
          problemInfo.key === "hi"
            ? { ...problemInfo, answer: inputValue }
            : problemInfo,
        );

        const problemExists = lastProblemsInfo.some(
          (problemInfo) => problemInfo.key === "hi",
        );
        if (!problemExists) {
          updatedProblemsInfo.push({ key: "hi", answer: inputValue });
        }

        localStorage.setItem(
          "problems-info",
          JSON.stringify(updatedProblemsInfo),
        );

        void trigger({ code: inputValue, language: "" });
      }
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "98%" }}>
      <div className={styles.container}>
        <Badge content="解答题" size="small" type="info" />
        <span>
          ({props.score}分){props.title}
        </span>
        <div style={{ paddingRight: "3rem", width: "100%" }}>
          <Input value={inputValue} onChange={handleInputChange} size="small" />
        </div>
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
