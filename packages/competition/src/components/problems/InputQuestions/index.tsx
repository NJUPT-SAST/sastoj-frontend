import { useState, useEffect } from "react";
import { Badge, Button, Input } from "@ui-aurora/react";
import styles from "./index.module.scss";

interface ProblemInfo {
  key: string;
  answer: string;
}

export const InputQuestions = () => {
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    // Fetch stored answer from localStorage when the component mounts
    const problemsInfo = localStorage.getItem("problems-info");
    if (problemsInfo) {
      const lastProblemsInfo: ProblemInfo[] = JSON.parse(problemsInfo);
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
    setInputValue(event.target.value);
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
        const lastProblemsInfo: ProblemInfo[] = JSON.parse(problemsInfo);

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
      }
    }
  };

  return (
    <>
      <ol style={{ width: "40%" }}>
        <li>
          <div className={styles.container}>
            <Badge content="解答题" size="small" type="info" />
            <span>(5分)这是第一个问题?</span>
          </div>
          <Input value={inputValue} onChange={handleInputChange} />
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
