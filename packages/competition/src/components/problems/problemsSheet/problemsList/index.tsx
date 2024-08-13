// import { Checkbox } from "@ui-aurora/react";
import { useSwrGetProblems } from "../../../../swrHooks/problems";
import { sortByKey } from "../../../../utils/aboutHandleData";
import styles from "./index.module.scss";
import React from "react";

interface ProblemsListProps {
  handleSelect: (problemId: number) => void;
}

export const ProblemsList: React.FC<ProblemsListProps> = ({ handleSelect }) => {
  const contestId = localStorage.getItem("contestId");

  const { data } = useSwrGetProblems(contestId as unknown as number);
  const problems = sortByKey(data?.problems as object[], 'index')
  return (
    <div className={styles["list-container"]}>
      {problems?.map((item) => {
        return (
          <div
            key={`${item.id}${item.title}`}
            className={styles["list-item"]}
            onClick={() => handleSelect(item.id)}
          >
            <span>
              {item.id}. {item.title}
            </span>
            <span>Point: {item.point}</span>
          </div>
        );
      })}
    </div>
  );
};
